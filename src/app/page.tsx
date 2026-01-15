import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero Section - Primary value proposition and call-to-action */}
      <article aria-label="DevFlow Technology - AI Agency & Web Development Company India">
        <HeroSection />
      </article>

      {/* Clients Section - Social proof and trust indicators */}
      <article aria-label="Trusted by leading companies and startups">
        <ClientsSection />
      </article>

      {/* Capabilities Section - Service offerings and technical expertise */}
      <article aria-label="IT Services - AI Solutions, ERP Systems, Web Development, Mobile Apps, Cloud DevOps">
        <CapabilitiesSection />
      </article>

      {/* Process Section - Methodology and workflow explanation */}
      <article aria-label="Our agile development process and methodology">
        <ProcessSection />
      </article>

      {/* Work Section - Portfolio and case studies showcase */}
      <article aria-label="Portfolio - Web development and AI projects showcase">
        <WorkSection />
      </article>

      {/* Testimonials Section - Client success stories */}
      <article aria-label="Client testimonials and success stories">
        <TestimonialsSection />
      </article>

      {/* Contact Section - Lead generation and communication */}
      <article aria-label="Contact DevFlow Technology - Get a free consultation">
        <ContactSection />
      </article>
    </>
  );
}
