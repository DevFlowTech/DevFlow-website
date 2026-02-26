"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-devflow-black pt-32 pb-20">
            <div className="section-container">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={staggerItem} className="mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-devflow-green text-sm font-medium mb-6 hover:translate-x-[-4px] transition-transform"
                        >
                            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                        <p className="text-devflow-gray-500">Last Updated: February 26, 2026</p>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={staggerItem} className="prose prose-invert max-w-none space-y-8 text-devflow-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed">
                                By accessing and using the DevFlow Technology website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">2. Use of Services</h2>
                            <p className="leading-relaxed">
                                You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">3. Professional Services</h2>
                            <p className="leading-relaxed">
                                Our specific project agreements and statements of work govern the delivery of our engineering and development services. These terms apply specifically to the use of our digital platforms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">4. Intellectual Property</h2>
                            <p className="leading-relaxed">
                                All content on this website, including text, graphics, logos, and code, is the property of DevFlow Technology and is protected by international copyright laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">5. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                DevFlow Technology shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">6. Governing Law</h2>
                            <p className="leading-relaxed">
                                These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in India.
                            </p>
                        </section>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
