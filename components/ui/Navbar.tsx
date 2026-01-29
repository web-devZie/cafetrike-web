"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Products", href: "#products" },
    { title: "Menu", href: "/menu" },
    { title: "Stories", href: "#stories" },
    { title: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
        },
    };

    const linkVariants = {
        closed: { y: 100, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
        }),
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white pointer-events-none">
                <div className="text-2xl font-bold uppercase tracking-tighter pointer-events-auto">
                    Trike
                </div>
                <button
                    onClick={toggleMenu}
                    className="pointer-events-auto p-2 hover:scale-110 transition-transform"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center p-4 text-white"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            {navLinks.map((link, i) => (
                                <div key={link.title} className="overflow-hidden">
                                    <motion.div custom={i} variants={linkVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={toggleMenu}
                                            className="text-6xl md:text-8xl font-bold uppercase tracking-tighter hover:text-yellow-500 transition-colors"
                                        >
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 1 } }}
                            className="absolute bottom-10 flex gap-8"
                        >
                            <a href="https://www.instagram.com/cafetrike.id?igsh=eXpmMHBkN3B3em95" target="_blank" rel="noopener noreferrer">
                                <Instagram size={24} className="hover:text-yellow-500 cursor-pointer" />
                            </a>
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                                <Phone size={24} className="hover:text-yellow-500 cursor-pointer" />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
