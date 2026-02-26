"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function FounderSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-devflow-charcoal">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={staggerItem}
              className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-5 block"
            >
              About DevFlow
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="font-display text-2xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight text-shadow-soft"
            >
              Engineering-Driven. Quality-Focused. Reliable.
            </motion.h2>
          </motion.div>

          {/* Founder Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <div className="p-6 md:p-12 bg-devflow-dark border border-white/[0.06] rounded-2xl shadow-layered relative overflow-hidden">
              {/* Quote Icon */}
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-devflow-green/20 mb-6 md:mb-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-devflow-gray-300 leading-relaxed">
                <p>
                  DevFlow Technology was founded by engineers who have spent
                  years building software across different industries — from
                  enterprise applications to web platforms serving clients in
                  India and internationally.
                </p>
                <p>
                  We've seen what works and what doesn't. Many businesses
                  struggle with vendors who over-promise and under-deliver, or
                  with code that becomes impossible to maintain. We started
                  DevFlow to be the alternative.
                </p>
                <p>
                  Our approach is simple: understand your business, design the
                  right solution, build it properly, and stand behind our work.
                  We work selectively because quality matters more than volume.
                </p>
                <p className="text-white font-medium">
                  We're not the biggest team. We're the team that delivers
                  software you can trust.
                </p>
              </div>

              {/* Signature Area */}
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/[0.06] flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center flex-shrink-0 animate-breathing-glow">
                  <span className="text-devflow-green font-semibold text-base md:text-lg">
                    D
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm md:text-base">DevFlow Team</p>
                  <p className="text-devflow-green text-xs md:text-sm">
                    DevFlow Technology
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Grid Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Quality First */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, borderColor: "rgba(186, 230, 84, 0.4)" }}
              className="p-8 bg-devflow-dark border border-white/[0.06] rounded-2xl relative overflow-hidden group cursor-default shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <svg className="w-20 h-20 text-devflow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">Quality First</h3>
                <p className="text-devflow-gray-300 text-sm leading-relaxed mb-6">
                  Our engineering DNA ensures every line of code is clean, documented, and tested. Every project is a long-term asset.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="px-2 py-0.5 rounded-full bg-devflow-green/10 border border-devflow-green/20 text-[8px] uppercase font-bold text-devflow-green">Unit Tested</span>
                <span className="px-2 py-0.5 rounded-full bg-devflow-green/10 border border-devflow-green/20 text-[8px] uppercase font-bold text-devflow-green">Reviewed</span>
              </div>
            </motion.div>

            {/* Clear Communication */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, borderColor: "rgba(186, 230, 84, 0.4)" }}
              className="p-8 bg-devflow-dark border border-white/[0.06] rounded-2xl relative overflow-hidden group cursor-default shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">Clear Updates</h3>
                <p className="text-devflow-gray-300 text-sm leading-relaxed mb-6">
                  No black boxes. Regular syncs, direct access to devs, and honest timelines. We treat your product like it's ours.
                </p>
              </div>
              <div className="flex items-center gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-6 rounded-full bg-devflow-green/20 group-hover:bg-devflow-green/40 transition-colors" />
                ))}
              </div>
            </motion.div>

            {/* Partnership */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5, borderColor: "rgba(186, 230, 84, 0.4)" }}
              className="p-8 bg-devflow-dark border border-white/[0.06] rounded-2xl relative overflow-hidden group cursor-default shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">Partnership</h3>
                <p className="text-devflow-gray-300 text-sm leading-relaxed mb-6">
                  We build for the future. From support to scaling, we're with you for the long haul. Your growth is our success.
                </p>
              </div>
              <div className="self-end text-devflow-green/10 transform rotate-12 transition-transform group-hover:rotate-0 duration-500">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.653 1.439 5.158L2 22l4.842-1.439C8.347 21.473 10.109 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
