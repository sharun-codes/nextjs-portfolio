'use client';

import { useEffect, useRef, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const recommendations = [
    {
        name: 'Paul Holliday',
        title: 'Market Intelligence Manager at RX Global',
        img: '/images/recommendations/paul-holliday.jpeg',
        text: `Sharun is a hard working and talented software professional who showed product ownership, diligence and skill over more than two years. All this despite inheriting legacy infrastructure, unclear project management, and few if any guidelines. I can thoroughly recommend him for software development, especially php and associated services.`,
    },
    {
        name: 'Deanna Earley',
        title: 'Staff Engineer at Estée Lauder Companies Inc.',
        img: '/images/recommendations/DeannaEarley.jpeg',
        text: `Sharun isan experianced software developer, and very heppy to pick up and learn different technologies and environments.
        He collaborates well with other team members with shared or overlapping projects.
        Sharun is an asset to any team he is part of!`,
    },
    {
        name: 'Amy-Jane Gilbert',
        title: 'Technical Director at Estée Lauder Companies Inc.',
        img: '/images/recommendations/Amy-Jane-Gilbert.jpeg',
        text: `Sharun is a remarkable DEV engineer, with whom I had the pleasure of working closely at Estee Lauder Companies for many years.
        During our collaboration, Sharun consistently demonstrated exceptional dedication proficiency and displayed impeccable attention to detail in all aspects of their role. Their commitment to ensuring our products' quality and reliability was commendable. He exhibited a keen eye for identifying potential issues and executed comprehensive investigating across diverse dimensions of our projects and maintenance and live site issues. This conscientious approach significantly contributed to the overall refinement of our final deliverables.
        One of Sharun's standout qualities was his adept problem-solving skills, espescially when working on React Checkout, coupled with his meticulous documentation and detail of his findings. He tackled even the most challenging situations with an innovative and analytical mindset, consistently achieving optimal outcomes. His ability to adapt to evolving circumstances while upholding a consistently high standard of work was truly impressive.
        Sharun's passion for learning and staying up-to-date with the latest trends and methodologies his field was evident throughout our collaboration. He actively sought opportunities to enhance his skills, which undoubtedly positively impacted the entire team's performance.
        
        Sharun's outstanding contributions to our team were invaluable, and he consistently upheld the values of professionalism, teamwork, and dedication. His positive attitude, strong work ethic, and proactive approach made him an indispensable asset to our projects.
        
        I wholeheartedly recommend Sharun for any React Checkout or engineering roles or similar positions. His exceptional abilities, commitment, and proven track record make him an ideal candidate to contribute to the success of any team or project.`,
    },
    {
        name: 'Yashas Khoday',
        title: 'Co-Founder & CTO at FYERS',
        img: '/images/recommendations/yashas.jpg',
        text: `Sharun is a diligent developer who spends time to understand the requirements given, clarifies them and finally gets done to execution! I really enjoyed the approach that he took while executing tasks which were assigned to him. 
        He was also extremely reliable who took up ownership of the task assigned and wouldn't let it go until it was fully completed!`,
    },
    {
        name: 'Manikuttan TK',
        title: 'Interaction Engineer',
        img: '/images/recommendations/manikuttantk.jpg',
        text: `Sharun! What a wonderful colleague you were! 
        It was an absolute pleasure working with you in Domy Innovation Cafe for several years. When it comes to hard work and commitment, you are the first person who comes to my mind. He is such a team player every team wants on their side. The dedication you put into several projects at the time is commendable, and I'm sure that you still do it on your current team and company. 
        He consistently outperformed the expectations and managed to make a huge impact. I would love to work with him any day, and all the best for your future endeavours!`,
    },
    {
        name: 'Bipin Domy Thomas',
        title: 'Chief Experience Officer',
        img: '/images/recommendations/bipin.jpg',
        text: `Sharun has been a supremely hard-working and committed member in my team. He is an out-and-out team player and someone you can count on. People like him makes any workplace a pleasure to be.`,
    },
    {
        name: 'Robert Hajdys',
        title: 'Manager | Marketing & Commerce | Deloitte Digital CE',
        img: '/images/recommendations/Robert-Hajdys.jpeg',
        text: `Sharun is a dedicated and conscientious developer who approaches every task with care and attention to detail. He consistently delivers high-quality work and is always reliable in meeting deadlines and expectations.
        In addition to his technical skills, Sharun is a supportive team member who collaborates effectively and contributes positively to any group he's part of. I highly recommend him to anyone seeking a dependable and diligent developer.`,
    },
    {
        name: 'Soumik Sarker',
        title: 'Senior Business Operation and Account Manager at ART-E MEDIATECH',
        img: '/images/recommendations/Soumik-Sarkar.jpeg',
        text: `I had the pleasure of working with Sharun at Interaction One, collaborating on several development projects. Sharun's ability to handle multiple tasks was unlike any I've seen before and dramatically increased in meeting the timelines of any project given to him. No matter how busy his schedule was, he made sure to attend to everyone's needs as a tech professional in the company. I have also learnt a lot about tech from him.
        As a team member, experienced senior and developer, Sharun earns my highest recommendation.`,
    },
];

const RecommendationsSection = ({ autoPlay = true, interval = 6000 }) => {
    const count = recommendations.length;
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const timerRef = useRef(null);
    const containerRef = useRef(null);
    const isHovered = useRef(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const lastTriggerRef = useRef(null);

    // determine mobile/touch environment (client-side)
    useEffect(() => {
        function check() {
            try {
                const coarse =
                    typeof window !== 'undefined' &&
                    window.matchMedia &&
                    window.matchMedia('(pointer: coarse)').matches;
                setIsMobile(
                    coarse ||
                        (typeof window !== 'undefined' &&
                            window.innerWidth < 768),
                );
            } catch (e) {
                setIsMobile(false);
            }
        }
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    useEffect(() => {
        if (!autoPlay) return;
        const tick = () => {
            if (!isHovered.current) setIndex((i) => (i + 1) % count);
        };
        timerRef.current = setInterval(tick, interval);
        return () => clearInterval(timerRef.current);
    }, [autoPlay, interval, count]);

    // pause on hover handlers
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onEnter = () => (isHovered.current = true);
        const onLeave = () => (isHovered.current = false);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mouseenter', onEnter);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    // keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [count]);

    function prev() {
        setIndex((i) => (i - 1 + count) % count);
    }
    function next() {
        setIndex((i) => (i + 1) % count);
    }
    function goTo(i) {
        setIndex(((i % count) + count) % count);
    }

    // Modal helpers
    const openModal = (item, triggerEl) => {
        lastTriggerRef.current = triggerEl || null;
        setModalContent(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
        // return focus to trigger
        if (
            lastTriggerRef.current &&
            typeof lastTriggerRef.current.focus === 'function'
        ) {
            lastTriggerRef.current.focus();
        }
    };

    // handle escape and focus management & body scroll lock
    const closeButtonRef = useRef(null);
    useEffect(() => {
        if (!modalOpen) {
            document.body.style.overflow = '';
            return;
        }
        document.body.style.overflow = 'hidden'; // lock scroll

        const onKey = (e) => {
            if (e.key === 'Escape') closeModal();
            // trap focus simple: if focus leaves modal, send to close button (basic)
            if (e.key === 'Tab') {
                // fine minimal trap: keep focus within modal close button & content
                // for complex needs, use aFocusTrap library
            }
        };
        window.addEventListener('keydown', onKey);

        // focus the close button for accessibility
        setTimeout(() => {
            if (closeButtonRef.current) closeButtonRef.current.focus();
        }, 0);

        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [modalOpen]);

    // tap behavior: advance to next slide on single tap for mobile/touch users
    const onSlideTap = (e) => {
        // only advance on mobile/touch and only when tapping the active slide (not interactive children)
        if (!isMobile) return;
        // ignore taps on buttons/links inside slide
        const tag = e.target && e.target.tagName;
        if (
            tag === 'A' ||
            tag === 'BUTTON' ||
            e.target.closest('button') ||
            e.target.closest('a')
        )
            return;
        next();
    };

    // truncation helper
    const TRUNCATE_LEN = 210;
    const isLong = (s) => s && s.length > TRUNCATE_LEN;
    const truncated = (s) =>
        s.slice(0, TRUNCATE_LEN).trimEnd() +
        (s.length > TRUNCATE_LEN ? '…' : '');

    return (
        <section id="recommendation" className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
            <div className="mx-auto px-2">
                <div
                    ref={containerRef}
                    className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Recommendations carousel"
                >
                    {/* Slides */}
                    <div className="relative h-auto min-h-[550px] p-8">
                        {recommendations.map((r, i) => {
                            const active = i === index;
                            return (
                                <article
                                    key={r.name + i}
                                    onClick={active ? onSlideTap : undefined}
                                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-[cubic-bezier(.2,.9,.2,1)] ${
                                        active
                                            ? 'opacity-100 z-20 pointer-events-auto'
                                            : 'opacity-0 z-10 pointer-events-none'
                                    }`}
                                    aria-hidden={!active}
                                >
                                    <div className="max-w-2xl text-center px-4">
                                        <div className="flex flex-col items-center">
                                            <img
                                                src={r.img}
                                                alt={`${r.name} avatar`}
                                                width={150}
                                                height={150}
                                                className="w-36 h-36 object-cover rounded-full shadow-md ring-2 ring-slate-100"
                                            />
                                            <h3 className="mt-6 text-lg font-semibold">
                                                {r.name}
                                                <div className="text-sm text-slate-400 font-normal mt-1">
                                                    {r.title}
                                                </div>
                                            </h3>
                                        </div>

                                        <div className="mt-6 text-slate-600 leading-relaxed text-left">
                                            {isLong(r.text) ? (
                                                <>
                                                    <p className="whitespace-pre-line">
                                                        {truncated(r.text)}{' '}
                                                        <button
                                                            className="mt-3 text-sm text-teal-600 hover:underline focus:outline-none"
                                                            onClick={(e) =>
                                                                openModal(
                                                                    r,
                                                                    e.currentTarget,
                                                                )
                                                            }
                                                            aria-haspopup="dialog"
                                                        >
                                                            Read more
                                                        </button>
                                                    </p>
                                                </>
                                            ) : (
                                                <p className="whitespace-pre-line">
                                                    {r.text}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Controls: hidden on small screens */}
                    <div className="absolute inset-y-0 left-2 flex items-center z-40">
                        <button
                            onClick={prev}
                            aria-label="Previous recommendation"
                            className="hidden md:inline-flex p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-shadow shadow-sm pointer-events-auto"
                        >
                            <svg
                                className="w-5 h-5 text-slate-700"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                aria-hidden
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute inset-y-0 right-2 flex items-center z-40">
                        <button
                            onClick={next}
                            aria-label="Next recommendation"
                            className="hidden md:inline-flex p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-shadow shadow-sm pointer-events-auto"
                        >
                            <svg
                                className="w-5 h-5 text-slate-700"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                aria-hidden
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 flex gap-2">
                        {recommendations.map((_, i) => (
                            <button
                                key={'dot-' + i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    i === index
                                        ? 'bg-teal-600 w-8 rounded-full shadow-md'
                                        : 'bg-slate-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="rec-modal-title"
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
                >
                    {/* backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeModal}
                        aria-hidden="true"
                    />

                    <div className="relative z-50 max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-auto">
                        <div className="p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={modalContent.img}
                                        alt={`${modalContent.name} avatar`}
                                        width={72}
                                        height={72}
                                        className="w-16 h-16 object-cover rounded-full shadow"
                                    />
                                    <div>
                                        <h3
                                            id="rec-modal-title"
                                            className="text-lg font-semibold"
                                        >
                                            {modalContent.name}
                                        </h3>
                                        <div className="text-sm text-slate-400">
                                            {modalContent.title}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        ref={closeButtonRef}
                                        onClick={closeModal}
                                        aria-label="Close recommendation"
                                        className="p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="prose max-w-none text-slate-700 max-h-96 overflow-y-auto">
                                {modalContent.text
                                    .split('\n')
                                    .map((line, idx) => (
                                        <p key={idx} className="mb-2">
                                            {line}
                                        </p>
                                    ))}
                            </div>

                            <div className="mt-3 text-right">
                                <Link
                                    target="_blank"
                                    href="https://www.linkedin.com/in/sharunk/details/recommendations/"
                                    className="inline-flex items-center gap-2 text-teal-600 rounded-md text-sm hover:scale-105"
                                >
                                    View in LinkedIn <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @media (prefers-reduced-motion: reduce) {
                    .transition-opacity {
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default RecommendationsSection;
