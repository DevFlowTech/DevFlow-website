"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import TechStackSection from "@/components/sections/TechStackSection";
import { CurveDivider } from "@/components/ui/WaveDivider";

// Dynamic imports for sections below the fold to optimize performance
const ServicesQuickView = dynamic(() => import("@/components/sections/ServicesQuickView"), { ssr: false });
const ProblemSolutionSection = dynamic(() => import("@/components/sections/ProblemSolutionSection"), { ssr: false });
const CoreServiceSection = dynamic(() => import("@/components/sections/CoreServiceSection"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"), { ssr: false });
const ProjectShowcase = dynamic(() => import("@/components/sections/ProjectShowcase"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), { ssr: false });
const CaseStudySection = dynamic(() => import("@/components/sections/CaseStudySection"), { ssr: false });
const FounderSection = dynamic(() => import("@/components/sections/FounderSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { ssr: false });
const ParallaxText = dynamic(() => import("@/components/ui/ParallaxText"), { ssr: false });

// Elegant section divider component
const SectionDivider = () => (
  <div className="section-divider mx-auto max-w-4xl my-0" />
);

export default function Home() {
  return (
    <>
      {/* Hero - Clear value proposition */}
      <HeroSection />

      {/* Stats Bar - Impressive numbers */}
      <StatsBar />

      {/* Tech Stack Marquee - Social Proof via Technology */}
      <TechStackSection />

      {/* Curved Transition to Services */}
      <CurveDivider color="#0a0a0a" className="-mt-1 bg-devflow-charcoal" />

      {/* Services Quick View - Scannable at a glance */}
      <ServicesQuickView />

      {/* Parallax Text - Visual Impact */}
      <div className="bg-devflow-black overflow-hidden py-4">
        <ParallaxText baseVelocity={-200}>
          INNOVATE • BUILD • SCALE •
        </ParallaxText>
      </div>

      {/* Problem → Solution - Speak to pain points */}
      <ProblemSolutionSection />

      {/* Elegant Divider */}
      <SectionDivider />

      {/* Core Service - What we build, who it's for */}
      <CoreServiceSection />

      {/* Curved Transition */}
      <CurveDivider color="#121212" className="-mb-1 bg-devflow-black" flip />

      {/* Process - Step-by-step with clear outcomes */}
      <ProcessSection />

      {/* Parallax Text - Visual Impact */}
      <div className="bg-devflow-black overflow-hidden py-4">
        <ParallaxText baseVelocity={150}>CODE • DESIGN • DEPLOY •</ParallaxText>
      </div>

      {/* Project Showcase - Portfolio Gallery */}
      <ProjectShowcase />

      {/* Testimonials - Client Success Stories */}
      <TestimonialsSection />

      {/* Case Study - Proof with real outcomes */}
      <CaseStudySection />

      {/* Elegant Divider */}
      <SectionDivider />

      {/* Risk Reversal - Low-risk ways to start */}

      {/* Curved Transition to About */}
      <CurveDivider color="#121212" className="-mt-1 bg-devflow-black" />

      {/* Founder Message - Human element */}
      <FounderSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Elegant Divider */}
      <SectionDivider />

      {/* Final CTA - Contact */}
      <ContactSection />
    </>
  );
}
