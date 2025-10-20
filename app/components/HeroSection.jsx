'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
    Briefcase,
    Star,
    MapPin,
    Mail,
    FileDown,
    ArrowRight,
    Github,
    Linkedin,
    Twitter,
} from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="mt-6 grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT: Intro */}
            <div className="space-y-6">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                        Hi — I'm <span className="text-teal-600">Sharun K</span>
                    </h1>

                    <p className="mt-4 text-slate-600 text-lg">
                        Backend-first web engineer who crafts resilient APIs and
                        thoughtful frontends. PHP, Laravel, and React
                        integrations — I build systems that scale and developer
                        happiness that lasts.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg transform transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        >
                            <ArrowRight size={16} />
                            Work with me
                        </a>

                        <Link
                            href="/Sharun-Resume.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm hover:shadow transition-shadow"
                            download="Sharun-Resume.pdf"
                        >
                            <FileDown size={16} />
                            Download Resume
                        </Link>

                        <a
                            href="mailto:sharunsankar@gmail.com"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-50 text-slate-700 border text-sm hover:shadow-sm"
                        >
                            <Mail size={15} />
                            Email me
                        </a>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-2">
                            <Briefcase size={15} className="text-slate-400" />
                            Senior Programmer at{' '}
                            <strong className="text-slate-700">
                                Cognizant
                            </strong>
                        </span>

                        <span className="inline-flex items-center gap-2">
                            <Star size={15} className="text-yellow-500" />
                            10+ years experience
                        </span>

                        <span className="inline-flex items-center gap-2">
                            <MapPin size={15} className="text-slate-400" />
                            Banglore, India
                        </span>
                    </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-1">
                    <a
                        href="https://github.com/sharun-codes"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                    >
                        <Github size={18} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sharunk/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="https://x.com/sharunsrk"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                    >
                        <Twitter size={18} />
                    </a>
                </div>
            </div>

            {/* RIGHT: Photo card */}
            <div className="relative">
                <div
                    className="rounded-3xl overflow-hidden bg-gradient-to-br from-white to-slate-50 p-5 shadow-2xl transform transition-all hover:scale-[1.01] will-change-transform"
                    style={{ perspective: 1000 }}
                >
                    {/* floating / parallax-like image */}
                    <div
                        className="relative rounded-xl overflow-hidden bg-white shadow-lg"
                        aria-hidden
                    >
                        <Image
                            src="/images/sharun_a.jpeg"
                            alt="Sharun smiling"
                            width={900}
                            height={700}
                            className="w-full h-80 object-cover"
                            priority={true}
                        />
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row items-start justify-between gap-5">
                        {/* LEFT: Description and Tech Tags */}
                        <div>
                            <div className="text-sm text-slate-500">
                                I build resilient backends and tidy frontends.
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
                                <span className="px-2 py-1 bg-slate-100 rounded">
                                    Core PHP
                                </span>
                                <span className="px-2 py-1 bg-slate-100 rounded">
                                    Laravel
                                </span>
                                <span className="px-2 py-1 bg-slate-100 rounded">
                                    React
                                </span>
                                <span className="px-2 py-1 bg-slate-100 rounded">
                                    MySQL
                                </span>
                            </div>
                        </div>

                        {/* RIGHT: Current Tech Stack (now below the description on mobile) */}
                        <div className="flex flex-col items-start gap-2 md:items-start md:text-left">
                            <div className="text-xs text-slate-400">
                                Currently
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-600 text-xs font-medium border">
                                NextJS · PWA · VueJS · Filament
                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky personality note */}
                {/* <div className="absolute -bottom-6 -left-6 w-44 p-3 bg-white/80 backdrop-blur rounded-lg border shadow-sm text-xs">
                    <div className="font-hand text-teal-600">
                        Let's make you something that scales.
                    </div>
                    <div className="text-slate-400 mt-1">
                        (and doesn't break on Fridays)
                    </div>
                </div> */}
            </div>

            {/* Local keyframes: gentle float for the card (prefers-reduced-motion respected) */}
            <style>{`
         @keyframes floatCard {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          @media (min-width: 768px) {
            .shadow-2xl > .relative {
              animation: floatCard 6s ease-in-out infinite;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .shadow-2xl > .relative {
              animation: none !important;
              transform: none !important;
            }
          }
      `}</style>
        </section>
    );
}
