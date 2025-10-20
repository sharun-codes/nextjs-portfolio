'use client';
import Link from 'next/link';

const GetToKnowMeSection = () => {
    return (
        <section id="about" className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Get to know me</h2>
            <div className="bg-white rounded-2xl shadow p-6 md:p-10 px-2">
                <p className="mt-4 text-md-start">
                    I'm a results-driven web developer with{' '}
                    <strong>10+ years</strong> of experience building dynamic,
                    user-centric applications. My sweet spot is backend design -
                    APIs, authentication, security, and database performance -
                    but I enjoy polishing the frontend so the product feels
                    whole.{' '}
                </p>

                <p className="mt-4 text-md-start">
                    With a strong technical background and excellent
                    interpersonal skills, I thrive on tackling challenges and
                    continuously refining my expertise. I'm passionate about
                    collaborating with diverse teams to create high-quality
                    websites, always seeking ways to enhance user experience and
                    overall functionality.
                </p>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold">What I do</h3>
                        <ul className="mt-3 space-y-2 ">
                            <li>
                                Designing scalable backend systems (PHP,
                                Laravel, Node)
                            </li>
                            <li>
                                Integrating frontend interfaces (React,
                                Bootstrap) into legacy codebases
                            </li>
                            <li>
                                Performance optimisation, CRON-driven ETL, data
                                pipelines
                            </li>
                            <li>
                                Payment gateway & third-party API integrations
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">How I work</h3>
                        <p className="mt-3">
                            Pragmatic, test-conscious, and collaborative. I
                            prefer clear APIs, small deployable units, and
                            automations that save people time. I enjoy mentoring
                            and documentation almost as much as shipping
                            features.
                        </p>
                        <div className="mt-4">
                            <Link
                                href="Sharun-Resume.pdf"
                                download="Sharun-Resume.pdf"
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-100"
                            >
                                Download resume
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetToKnowMeSection;
