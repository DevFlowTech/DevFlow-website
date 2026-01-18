"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
  arrowSlide,
  easeOut,
} from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";

const trustSignals = [
  { text: "Engineering-first approach" },
  { text: "In-house development" },
  { text: "India & international clients" },
];

const quickServices = [
  { label: "Business Websites", href: "#services" },
  { label: "Web Applications", href: "#services" },
  { label: "Internal Tools", href: "#services" },
  { label: "Custom Software", href: "#services" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center bg-devflow-black pt-32 pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(186,230,84,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0)_0%,rgba(10,10,10,1)_100%)]" />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-devflow-green/20 bg-devflow-green/[0.05] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-devflow-green animate-pulse" />
            <span className="text-sm font-medium text-devflow-green tracking-wide uppercase">
              Engineering-First IT Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            Transforming Ideas into <br className="hidden md:block" />
            <span className="relative inline-block text-white">
              Digital Reality
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-devflow-green"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C25.7501 2.99991 74.8001 -2.70008 198 3.99996"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            We build high-performance software with engineering precision. From{" "}
            <span className="text-white font-medium">Web Apps</span> to{" "}
            <span className="text-white font-medium">AI Solutions</span>, we
            scale effective digital products that drive business growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <MagneticButton>
              <Link href="#contact" className="btn-primary min-w-[200px]">
                Talk to Our Experts
                <motion.svg
                  variants={arrowSlide}
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link href="#services" className="btn-secondary min-w-[200px]">
                Explore Our Work
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center gap-4 border-t border-white/[0.08] pt-10"
          >
            <p className="text-sm font-medium text-devflow-gray-400 uppercase tracking-widest">
              Trusted by Innovative Companies
            </p>
            {/* We will let existing ClientSection handle the logos below this section, 
                or we can integrate a small preview here. For now, just the label. */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
