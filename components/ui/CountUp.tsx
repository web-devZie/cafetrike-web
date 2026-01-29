"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring, useMotionValue } from "motion/react";

interface CountUpProps {
    value: number;
    label?: string;
    suffix?: string;
}

export default function CountUp({ value, label, suffix = "" }: CountUpProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <div ref={ref} className="text-center p-8 bg-neutral-900 border border-neutral-800 rounded-2xl hover:bg-neutral-800 transition-colors">
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">
                {displayValue}{suffix}
            </div>
            {label && <div className="mt-2 text-neutral-400 text-lg uppercase tracking-wider">{label}</div>}
        </div>
    );
}
