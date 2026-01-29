"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white text-black">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 filter grayscale">
                    {/* Placeholder for video, fallback to pattern */}
                    <source src="" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-9xl font-bold mb-8"
                >
                    JOIN THE CULT
                </motion.h2>
                <Link href="/menu">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white px-12 py-5 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                    >
                        OUR MENU'S
                    </motion.button>
                </Link>
            </div>
        </section>
    );
}
