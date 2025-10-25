'use client';
import { useState } from 'react';
import { useCsrf } from './../useCsrf';

export default function ContactForm() {
    const csrf = useCsrf();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        _hp: '',
    });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    async function handleSubmit(e) {
        e.preventDefault();
        if (form._hp) return; // honeypot
        setLoading(true);
        setStatus(null);

        try {
            const CONTACT_API_URL = process.env.NEXT_PUBLIC_CONTACT_API;

            const res = await fetch(CONTACT_API_URL, {
                method: 'POST',
                credentials: 'include', // ensure cookie is sent
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrf || '',
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || 'Failed');
            setStatus({ ok: true, msg: 'Message sent - I’ll get back soon!' });
            setForm({ name: '', email: '', message: '', _hp: '' });
        } catch (err) {
            setStatus({ ok: false, msg: err.message });
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-2 p-4 rounded bg-slate-50 h-full flex flex-col"
        >
            <label className="hidden">
                Leave this empty
                <input name="_hp" value={form._hp} onChange={update} />
            </label>

            <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                    <label className="text-sm">Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={update}
                        required
                        className="w-full mt-1 px-3 py-2 rounded border"
                    />
                </div>
                <div className="flex-1">
                    <label className="text-sm">Email</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={update}
                        type="email"
                        required
                        className="w-full mt-1 px-3 py-2 rounded border"
                    />
                </div>
            </div>
            <div>
                <label className="text-sm">Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows="4"
                    required
                    className="w-full mt-1 px-3 py-2 rounded border flex-1"
                />
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 rounded bg-teal-500 text-white"
                >
                    {loading ? 'Sending…' : 'Send message'}
                </button>
            </div>

            {status && (
                <p
                    className={`text-sm text-center mt-2 ${status.ok ? 'text-green-600' : 'text-red-600'}`}
                >
                    {status.msg}
                </p>
            )}
        </form>
    );
}
