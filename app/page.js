'use client';

import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import GetToKnowMeSection from './components/GetToKnowMeSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import RecommendationsSection from './components/RecommendationsSection';
import Footer from './components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-5 py-10 md:py-20">
                <HeroSection />

                <GetToKnowMeSection />

                <ExperienceSection />

                <EducationSection />

                <SkillsSection />

                <RecommendationsSection />

                <ContactSection />

                <Footer />
            </div>
        </>
    );
}
