'use client';
import { FileCode, Brush, Server, Layers, Users, Wrench } from 'lucide-react';

const SKILL_GROUPS = [
    {
        title: 'Core Expertise',
        icon: FileCode,
        items: [
            'PHP (Laravel, Core PHP)',
            'MySQL',
            'RESTful API Design & Integration',
            'Authentication (JWT, Sanctum, OAuth)',
            'Security Best Practices',
        ],
    },
    {
        title: 'Frontend Proficiency',
        icon: Brush,
        items: [
            'HTML5 & CSS3',
            'Bootstrap',
            'TailwindCSS',
            'Basic JavaScript (ES6)',
            'Frontend Integration with Backend Services',
        ],
    },
    {
        title: 'DevOps & Tools',
        icon: Server,
        items: [
            'Git & Version Control',
            'Composer & NPM',
            'Cloud Services (AWS, Azure)',
            'CI/CD Pipelines (Github Actions, Bamboo)',
            'Apache, Nginx Web Servers',
        ],
    },
    {
        title: 'Frameworks & Libraries',
        icon: Layers,
        items: [
            'Laravel',
            'ExpressJS Basics',
            'jQuery',
            'React.js (Integration)',
            'Filament',
        ],
    },
    {
        title: 'Collaboration & Soft Skills',
        icon: Users,
        items: [
            'Team Collaboration (Agile, Scrum)',
            'Problem Solving & Critical Thinking',
            'Client Communication & Requirements Gathering',
        ],
    },
    {
        title: 'Additional Skills',
        icon: Wrench,
        items: [
            'API Integration (Payment Gateways, Third-Party APIs)',
            'NodeJS',
            'Vue.js Basics',
            'MongoDB Basics',
        ],
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="mx-auto px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILL_GROUPS.map((group, idx) => {
                        const Icon = group.icon;
                        const delay = idx * 80;

                        // safety: if an icon import failed, render fallback and log it
                        const SafeIcon = (props) => {
                            if (!Icon) {
                                // helpful message for debugging
                                if (typeof window !== 'undefined') {
                                    // eslint-disable-next-line no-console
                                    console.warn(
                                        `[Skills] missing icon for "${group.title}". Falling back to BookOpen icon.`,
                                    );
                                }
                                return <BookOpen {...props} />;
                            }
                            return <Icon {...props} />;
                        };

                        return (
                            <article
                                key={group.title}
                                className="bg-white rounded-2xl shadow-sm border p-5 transform transition duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${delay}ms` }}
                            >
                                <header className="flex items-center gap-4">
                                    <div className="flex-none">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50 border flex items-center justify-center text-teal-600">
                                            <SafeIcon size={20} />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold">
                                        {group.title}
                                    </h3>
                                </header>

                                <ul className="mt-4 space-y-2 text-slate-600">
                                    {group.items.map((it) => (
                                        <li
                                            key={it}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1 text-teal-500">
                                                •
                                            </span>
                                            <span className="text-sm">
                                                {it}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                /* fade-up entrance for cards */
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
                section#skills article {
                    opacity: 0;
                    animation: fadeUp 520ms cubic-bezier(0.2, 0.9, 0.2, 1)
                        forwards;
                }
                @media (prefers-reduced-motion: reduce) {
                    section#skills article {
                        animation: none !important;
                        opacity: 1;
                        transform: none !important;
                    }
                    section#skills article:hover {
                        transform: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default SkillsSection;
