"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function PrivacyPolicy() {
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                        <p className="text-devflow-gray-500">Last Updated: February 26, 2026</p>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={staggerItem} className="prose prose-invert max-w-none space-y-8 text-devflow-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">1. Information We Collect</h2>
                            <p className="leading-relaxed">
                                We collect information you provide directly to us when you fill out our contact forms, request a quote, or communicate with us about our services. This may include your name, email address, phone number, and company information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">2. How We Use Your Information</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To provide, maintain, and improve our services</li>
                                <li>To respond to your inquiries and support requests</li>
                                <li>To communicate with you about projects and updates</li>
                                <li>To monitor and analyze trends and usage of our website</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">3. Data Security</h2>
                            <p className="leading-relaxed">
                                As an engineering-first company, we take data security seriously. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">4. Cookies</h2>
                            <p className="leading-relaxed">
                                Our website uses cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">5. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                <a href="mailto:devflowtechnology@gmail.com" className="text-devflow-green hover:underline">devflowtechnology@gmail.com</a>
                            </p>
                        </section>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
