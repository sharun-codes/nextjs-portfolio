import Image from 'next/image';

const EducationSection = () => {
    return (
        <section id="education" className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="mx-auto px-2">
                <div
                    className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
                    role="region"
                    aria-labelledby="edu-heading"
                >
                    <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-20 md:h-20">
                        <Image
                            src="/images/calicut-university.jpeg"
                            alt="Calicut University logo"
                            width={80}
                            height={80}
                            className="rounded-full object-contain"
                            priority={false}
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <h3 id="edu-heading" className="text-lg font-semibold">
                            Bachelor of Technology (B.Tech), Information
                            Technology
                        </h3>
                        <p className="mt-1 text-sm text-slate-500 font-medium">
                            Calicut University Institute of Engineering &amp;
                            Technology
                        </p>
                        <div className="mt-2 text-sm text-slate-400">
                            2009 — 2013
                        </div>
                    </div>
                </div>
            </div>

            {/* subtle fade-up animation (local) */}
            <style jsx>{`
                @keyframes fadeUpEdu {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                /* apply animation to the card */
                section#education > div > div {
                    opacity: 0;
                    animation: fadeUpEdu 520ms cubic-bezier(0.2, 0.9, 0.2, 1)
                        forwards;
                    animation-delay: 120ms;
                }
                @media (prefers-reduced-motion: reduce) {
                    section#education > div > div {
                        animation: none;
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>
        </section>
    );
};
export default EducationSection;
