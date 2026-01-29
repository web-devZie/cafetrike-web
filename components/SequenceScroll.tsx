"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "motion/react";
import clsx from "clsx";

const FRAME_COUNT = 192;
const IMAGES_DIR = "/sequence";

// Clean frame mapping
const getFramePath = (index: number) => {
    const frameNumber = (index + 1).toString().padStart(3, "0");
    return `${IMAGES_DIR}/ezgif-frame-${frameNumber}.jpg`;
};

export default function SequenceScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll (0-1) to frame index (0 - FRAME_COUNT-1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        const loadImages = async () => {
            const promises = [];
            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = getFramePath(i);
                    img.onload = () => {
                        loadedCount++;
                        resolve();
                    };
                    imgArray[i] = img;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(imgArray);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    // Draw to canvas
    const renderC = (index: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        const img = images[index];

        if (!context || !canvas || !img) return;

        // Responsive "cover" fit
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded) return;
        const index = Math.floor(latest);
        requestAnimationFrame(() => renderC(index));
    });

    // Initial draw on load
    useEffect(() => {
        if (isLoaded) {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                renderC(0);
            }

            const handleResize = () => {
                if (canvas) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    // Redraw current frame
                    renderC(Math.floor(frameIndex.get()));
                }
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [isLoaded]);

    // Text Animations - Opacity based on scroll progress
    // 0-0.2: Title
    // 0.25-0.45: Left Slogan
    // 0.5-0.7: Right Slogan
    // 0.8-1.0: CTA
    const opacityTitle = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const yTitle = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacityLeft = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const xLeft = useTransform(scrollYProgress, [0.2, 0.3], [-50, 0]);

    const opacityRight = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const xRight = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);

    const opacityCTA = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
    const scaleCTA = useTransform(scrollYProgress, [0.8, 0.9], [0.8, 1]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full object-cover" />

                {/* Loading State */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-50">
                        <div className="text-2xl font-light tracking-widest animate-pulse">LOADING...</div>
                    </div>
                )}

                {/* Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Section 1: Title */}
                    <motion.div style={{ opacity: opacityTitle, y: yTitle }} className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none">Cafe Trike</h1>
                        <p className="mt-4 text-xl md:text-2xl font-light tracking-widest text-white/80">Tricycle Mini Cafe</p>
                    </motion.div>

                    {/* Section 2: Left Slogan */}
                    <motion.div style={{ opacity: opacityLeft, x: xLeft }} className="absolute inset-0 flex items-center justify-start text-white px-8 md:px-20">
                        <h2 className="text-4xl md:text-7xl font-bold leading-tight max-w-2xl bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                            From the mountains<br />to your cup.
                        </h2>
                    </motion.div>

                    {/* Section 3: Right Slogan */}
                    <motion.div style={{ opacity: opacityRight, x: xRight }} className="absolute inset-0 flex items-center justify-end text-white px-8 md:px-20 text-right">
                        <h2 className="text-4xl md:text-7xl font-bold leading-tight max-w-2xl">
                            crafted for the<br /><span className="italic text-yellow-500">obsessed.</span>
                        </h2>
                    </motion.div>

                    {/* Section 4: CTA */}
                    <motion.div style={{ opacity: opacityCTA, scale: scaleCTA }} className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-auto">
                        <h3 className="text-5xl md:text-8xl font-bold mb-8 text-center tracking-tighter">Ready to brew?</h3>
                        <button className="px-12 py-4 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300">
                            Get Started
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
