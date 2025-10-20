'use client';
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import ContactForm from './../components/ContactForm';

const ContactSection = () => {
    return (
        <section id="contact" className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
            <div className="bg-white rounded-2xl p-6 md:p-10 overflow-visible relative px-2">
                <p className="text-xl text-slate-700">
                    Got a project, a question, or want to say hi? Leave a short
                    note and I'll get back.
                </p>

                <div className="mt-6 grid md:grid-cols-3 md:gap-8 items-start">
                    {/* LEFT: Contact details card */}
                    <div
                        className="relative rounded-xl p-5  transform transition-transform hover:-translate-y-1 motion-reduce:transform-none h-full md:col-span-1"
                        style={{ willChange: 'transform' }}
                    >
                        <div
                            className="fade-up"
                            style={{ animationDelay: '120ms' }}
                        >
                            <ul className="mt-3 text-slate-600 space-y-6">
                                {/* Location */}
                                <li className="flex items-center gap-3">
                                    <span className="p-2 rounded-md bg-slate-100 text-teal-600">
                                        <MapPin size={18} />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold">
                                            Bangalore, India
                                        </div>
                                        <div className="text-xs text-slate-400">
                                            Available for remote & hybrid work
                                        </div>
                                    </div>
                                </li>

                                {/* Phone */}
                                <li className="flex items-center gap-3">
                                    <span className="p-2 rounded-md bg-slate-100 text-teal-600">
                                        <Phone size={18} />
                                    </span>
                                    <a
                                        className="text-teal-600 hover:underline"
                                        href="tel:+917204898292"
                                        rel="noopener noreferrer"
                                    >
                                        +91 7204898292
                                    </a>
                                </li>

                                {/* Email */}
                                <li className="flex items-center gap-3">
                                    <span className="p-2 rounded-md bg-slate-100 text-teal-600">
                                        <Mail size={18} />
                                    </span>
                                    <a
                                        className="text-teal-600 hover:underline break-all"
                                        href="mailto:sharunsankar@gmail.com"
                                        rel="noopener noreferrer"
                                    >
                                        sharunsankar@gmail.com
                                    </a>
                                </li>
                            </ul>

                            {/* Social links */}
                            <div className="mt-6 flex gap-3">
                                <a
                                    href="https://github.com/sharun-codes"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:shadow-md transition-all hover:-translate-y-[1px]"
                                >
                                    <Github
                                        size={16}
                                        className="text-slate-600"
                                    />
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/sharunk/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:shadow-md transition-all hover:-translate-y-[1px]"
                                >
                                    <Linkedin
                                        size={16}
                                        className="text-sky-600"
                                    />
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Local fade-up animation */}
                        <style>{`
                            @keyframes fadeUp {
                                from {
                                    opacity: 0;
                                    transform: translateY(10px);
                                }
                                to {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }
                            .fade-up {
                                opacity: 0;
                                animation: fadeUp 550ms
                                    cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
                            }
                            @media (prefers-reduced-motion: reduce) {
                                .fade-up {
                                    animation: none;
                                    opacity: 1;
                                    transform: none;
                                }
                            }
                        `}</style>
                    </div>

                    {/* RIGHT: Contact Form */}
                    <div
                        className="fade-up md:col-span-2"
                        style={{ animationDelay: '250ms' }}
                    >
                        <div className="rounded-lg border overflow-hidden h-full">
                            <ContactForm />
                        </div>
                    </div>
                </div>

                <style>{`
                            /* small fade-up animation (no Tailwind config change required) */
                            @keyframes fadeUp {
                                from {
                                    opacity: 0;
                                    transform: translateY(10px);
                                }
                                to {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }
                            .fade-up {
                                opacity: 0;
                                animation: fadeUp 560ms
                                    cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
                            }
                            /* Reduce motion respect */
                            @media (prefers-reduced-motion: reduce) {
                                .fade-up {
                                    animation: none;
                                    opacity: 1;
                                    transform: none;
                                }
                            }
                        `}</style>
            </div>
        </section>
    );
};

export default ContactSection;
