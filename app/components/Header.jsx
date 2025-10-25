'use client';
import Image from 'next/image';
const avatarImage = '/images/avatar.png';

const Header = () => {
    return (
        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-sm border-b">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/avatar.png"
                            alt="Profile picture"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div className="text-sm font-semibold">Sharun K</div>
                        <div className="text-xs text-slate-500 -mt-0.5">
                            Senior Web Developer
                        </div>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-6">
                    <a className="hover:text-teal-600" href="#about">
                        About
                    </a>
                    <a className="hover:text-teal-600" href="#experience">
                        Experience
                    </a>
                    <a className="hover:text-teal-600" href="#skills">
                        Skills
                    </a>
                    <a className="hover:text-teal-600" href="#recommendation">
                        Recommendations
                    </a>
                    <a className="hover:text-teal-600" href="#contact">
                        Contact
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/sharun-codes"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:visible text-slate-600 hover:text-slate-900"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sharunk/"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:visible text-slate-600 hover:text-slate-900"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="#contact"
                        className="ml-3 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-teal-500 text-white text-sm shadow-sm hover:bg-teal-600"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
