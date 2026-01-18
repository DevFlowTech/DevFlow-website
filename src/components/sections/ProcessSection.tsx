"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    duration: "Week 0",
    description:
      "We dig deep into your operations. No generic questionnaires. We interview your team, map your workflows, and identify exactly where custom software will generate ROI.",
    outcome: "Detailed Scope of Work & Fixed-Price Proposal",
  },
  {
    number: "02",
    title: "Architecture & Design",
    duration: "Week 1",
    description:
      "Before a single line of code is written, we blueprint the entire system. You'll see clickable prototypes and database schemas, ensuring we're building exactly what you need.",
    outcome: "Interactive Prototypes & Technical Spec",
  },
  {
    number: "03",
    title: "Agile Development",
    duration: "Weeks 2-6",
    description:
      "We build in rapid 2-week sprints. You get access to a staging environment to test features as they're built. No black boxes. Real progress you can click.",
    outcome: "Production-Ready Software delivered in sprints",
  },
  {
    number: "04",
    title: "Deployment & Handoff",
    duration: "Week 7+",
    description:
      "We handle the launch, configure your servers, and train your team. Post-launch, we provide 30 days of bug-fixing support and hand over clean, documented code.",
    outcome: "Full IP Ownership & zero vendor lock-in",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-devflow-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-devflow-green/20 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-4 block">
            The Roadmap
          </motion.span>
          <motion.h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-6">
            From Chaos to <span className="text-devflow-green">Clarity</span>
          </motion.h2>
          <motion.p className="text-lg text-devflow-gray-300 max-w-2xl mx-auto">
            A transparent, engineering-led process designed to deliver
            high-quality software without the surprises.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-16 last:mb-0 group ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot (Center) */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-devflow-green bg-devflow-black z-10 group-hover:bg-devflow-green group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(186,230,84,0.3)]" />

              {/* Number/Duration Side */}
              <div
                className={`flex-1 w-full md:w-auto text-left md:text-right ${index % 2 !== 0 ? "md:text-left" : ""}`}
              >
                <span className="text-6xl font-display font-bold text-white/[0.04] group-hover:text-white/[0.1] transition-colors duration-300">
                  {step.number}
                </span>
                <p className="text-devflow-green font-mono text-sm mt-2">
                  {step.duration}
                </p>
              </div>

              {/* Spacer for center alignment */}
              <div className="hidden md:block w-px h-10" />

              {/* Content Side */}
              <div className="flex-1 w-full pl-16 md:pl-0">
                <div className="relative p-8 rounded-2xl bg-devflow-charcoal border border-white/[0.06] group-hover:border-devflow-green/30 transition-all duration-300 hover:shadow-glow-green-sm">
                  {/* Connector Line (Mobile only) */}
                  <div className="md:hidden absolute top-1/2 -translate-y-1/2 -left-12 w-12 h-px bg-devflow-green/20" />

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-devflow-gray-400 mb-5 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <svg
                      className="w-4 h-4 text-devflow-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-devflow-gray-300 font-medium">
                      {step.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
