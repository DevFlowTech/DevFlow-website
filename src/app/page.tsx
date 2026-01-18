import HeroSection from "@/components/sections/HeroSection";
import ServicesQuickView from "@/components/sections/ServicesQuickView";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import CoreServiceSection from "@/components/sections/CoreServiceSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import RiskReversalSection from "@/components/sections/RiskReversalSection";
import FounderSection from "@/components/sections/FounderSection";
import ContactSection from "@/components/sections/ContactSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
  return (
    <>
      {/* Hero - Clear value proposition */}
      <HeroSection />

      {/* Tech Stack Marquee - Social Proof via Technology */}
      <TechStackSection />

      {/* Services Quick View - Scannable at a glance */}
      <ServicesQuickView />

      {/* Problem → Solution - Speak to pain points */}
      <ProblemSolutionSection />

      {/* Core Service - What we build, who it's for */}
      <CoreServiceSection />

      {/* Process - Step-by-step with clear outcomes */}
      <ProcessSection />

      {/* Case Study - Proof with real outcomes */}
      <CaseStudySection />

      {/* Risk Reversal - Low-risk ways to start */}
      <RiskReversalSection />

      {/* Founder Message - Human element */}
      <FounderSection />

      {/* Final CTA - Contact */}
      <ContactSection />
    </>
  );
}
