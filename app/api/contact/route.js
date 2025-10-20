import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_PER_WINDOW = 6;
const ipTimestamps = new Map();

function rateLimitCheck(ip) {
    const now = Date.now();
    const arr = ipTimestamps.get(ip) || [];
    // keep timestamps inside window
    const recent = arr.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    recent.push(now);
    ipTimestamps.set(ip, recent);
    if (recent.length > MAX_PER_WINDOW) return false;
    return true;
}

function sanitize(str = '') {
    // simple sanitizer: trim and replace suspicious tags
    return String(str)
        .trim()
        .replace(/<[^>]*>?/gm, '');
}

export async function POST(req) {
    try {
        const ip =
            (req.headers.get('x-forwarded-for') || '').split(',').shift() ||
            req.ip ||
            req.headers.get('host') ||
            'unknown';
        const body = await req.json();
        const { name, email, message, _hp } = body ?? {};

        // Honeypot spam trap
        if (_hp) return NextResponse.json({ error: 'spam' }, { status: 400 });

        // Basic rate limiting
        if (!rateLimitCheck(ip)) {
            return NextResponse.json(
                { error: 'rate_limited' },
                { status: 429 },
            );
        }

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'missing_fields' },
                { status: 400 },
            );
        }
        // minimal email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(String(email))) {
            return NextResponse.json(
                { error: 'invalid_email' },
                { status: 400 },
            );
        }

        // sanitize inputs (server-side)
        const safeName = sanitize(name).slice(0, 200);
        const safeEmail = sanitize(email).slice(0, 200);
        const safeMessage = sanitize(message).slice(0, 5000);

        // TODO: verify captcha here (reCAPTCHA/hCaptcha) before sending mail

        const {
            SMTP_HOST,
            SMTP_PORT,
            SMTP_USER,
            SMTP_PASS,
            SENDER_EMAIL,
            RECEIVER_EMAIL,
        } = process.env;

        if (
            !SMTP_HOST ||
            !SMTP_PORT ||
            !SMTP_USER ||
            !SMTP_PASS ||
            !SENDER_EMAIL ||
            !RECEIVER_EMAIL
        ) {
            console.error('Missing SMTP env vars');
            return NextResponse.json(
                { error: 'server_misconfigured' },
                { status: 500 },
            );
        }

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: parseInt(SMTP_PORT, 10),
            secure: SMTP_PORT == 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const htmlEmail = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            background-color: #ffffff;
            padding: 20px;
            max-width: 600px;
            margin: 20px auto;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h2 {
            color: #333333;
          }
          p {
            line-height: 1.6;
            color: #555555;
          }
          .form-data {
            margin: 20px 0;
          }
          .form-data label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
            color: #333333;
          }
          .form-data span {
            display: block;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 5px;
            color: #333;
            word-wrap: break-word;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #999999;
            margin-top: 30px;
          }
        </style>
        </head>
        <body>
          <div class="email-container">
            <h2>New Contact Form Submission</h2>
            <p>You have received a new message from the contact form on your Portfolio. Here are the details:</p>
        
            <div class="form-data">
              <label>Name:</label>
              <span>${safeName}</span>
            </div>
        
            <div class="form-data">
              <label>Email:</label>
              <span>${safeEmail}</span>
            </div>
        
            <div class="form-data">
              <label>Message:</label>
              <span>${safeMessage}</span>
            </div>
        
            <p>Be sure to follow up with this inquiry as soon as possible.</p>
        
            <div class="footer">
              <p>&copy; Sharun - Portfolio</p>
            </div>
          </div>
        </body>
        </html>`;

        const mailOptions = {
            from: SENDER_EMAIL,
            to: RECEIVER_EMAIL,
            replyTo: safeEmail,
            subject: `New Contact Form Submission from ${safeName}`,
            html: htmlEmail,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Contact form send failed:', err);
        return NextResponse.json({ error: 'failed to send' }, { status: 500 });
    }
}
