"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        quote: "Paling the best tempat nongki dengan harga murce",
        author: "Imelda Ekawati",
        role: "Google Maps Reviewer",
    },
    {
        quote: "mantapp",
        author: "yodia",
        role: "Google Maps Reviewer",
    },
    {
        quote: "Bagus",
        author: "Rizky Ha",
        role: "Google Maps Reviewer",
    },
];

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative h-screen flex flex-col items-center justify-center bg-white text-black overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none z-10">
                <button onClick={handlePrev} className="pointer-events-auto p-4 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all">
                    <ArrowLeft size={32} />
                </button>
                <button onClick={handleNext} className="pointer-events-auto p-4 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all">
                    <ArrowRight size={32} />
                </button>
            </div>

            <div className="w-full max-w-6xl px-8 text-center">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-4xl md:text-7xl font-bold leading-tight mb-12">
                        &quot;{testimonials[current].quote}&quot;
                    </h3>
                    <div className="text-xl md:text-2xl font-light uppercase tracking-widest">
                        {testimonials[current].author} <span className="opacity-50">— {testimonials[current].role}</span>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 flex space-x-2">
                {testimonials.map((_, i) => (
                    <div key={i} className={`h-1 w-12 rounded-full transition-all duration-300 ${i === current ? "bg-black" : "bg-black/20"}`} />
                ))}
            </div>
        </div>
    );
}
