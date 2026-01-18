"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";

export default function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-28 lg:py-36 bg-devflow-black">
      <div className="section-container">
        {/* Problem Section */}
        <motion.div
          className="max-w-3xl mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-5 block"
          >
            The Challenge
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-8"
          >
            You Need Software That Works — Not Compromises
          </motion.h2>

          <motion.div
            variants={staggerItem}
            className="space-y-5 text-lg text-devflow-gray-300 leading-relaxed"
          >
            <p>
              Growing businesses face a common dilemma: off-the-shelf tools
              don't fit your workflow, and building custom software seems
              expensive and risky.
            </p>
            <p>
              You've tried patching together spreadsheets, no-code tools, and
              multiple SaaS subscriptions. It works — until it doesn't. Data
              lives in silos. Manual processes create bottlenecks. And your team
              spends more time managing tools than doing their actual work.
            </p>
            <p>
              Hiring an in-house development team is a commitment you may not be
              ready for. Offshore teams often deliver code without understanding
              your business context.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 p-6 bg-white/[0.02] border-l-2 border-devflow-green rounded-r-lg"
          >
            <p className="text-white font-medium mb-2">The result?</p>
            <p className="text-devflow-gray-400">
              You're stuck between knowing what you need and finding someone who
              can actually build it right.
            </p>
          </motion.div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-5 block"
          >
            Our Approach
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-8"
          >
            A Reliable Technical Partner. Not Just Another Vendor.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg text-devflow-gray-300 leading-relaxed mb-12"
          >
            We work closely with you to understand your business, then build
            software that fits your exact needs:
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-5"
          >
            {[
              {
                title: "Modern Web Applications",
                description:
                  "Fast, responsive applications built with proven technology",
              },
              {
                title: "Business Dashboards",
                description:
                  "Real-time insights from your data, visualized clearly",
              },
              {
                title: "Process Automation",
                description:
                  "Eliminate repetitive tasks and reduce human error",
              },
              {
                title: "API & Integrations",
                description:
                  "Connect your existing tools into a unified workflow",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="p-6 bg-devflow-charcoal border border-white/[0.06] rounded-xl transition-all duration-150 hover:border-white/10"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-devflow-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-lg text-white font-medium mt-12"
          >
            You get software that works. Your team gets their time back.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
