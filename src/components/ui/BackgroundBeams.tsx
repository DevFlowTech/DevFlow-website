"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const [paths, setPaths] = useState<{ d: string; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate random paths for the beams
        const newPaths = Array.from({ length: 6 }).map(() => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;

            return {
                d: `M ${startX} ${startY} L ${endX} ${endY}`,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5,
            };
        });
        setPaths(newPaths);
    }, []);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg
                className="h-full w-full opacity-[0.15]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {paths.map((path, i) => (
                    <motion.path
                        key={i}
                        d={path.d}
                        stroke="url(#beam-gradient)"
                        strokeWidth="0.2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 1, 1, 0],
                            pathOffset: [0, 0, 1, 1],
                        }}
                        transition={{
                            duration: path.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: path.delay,
                        }}
                    />
                ))}
                <defs>
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#bae654" stopOpacity="0" />
                        <stop offset="50%" stopColor="#bae654" stopOpacity="1" />
                        <stop offset="100%" stopColor="#bae654" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};
