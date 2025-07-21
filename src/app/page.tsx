import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutMeSection from '@/components/sections/about-me-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import EducationSection from '@/components/sections/education-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
