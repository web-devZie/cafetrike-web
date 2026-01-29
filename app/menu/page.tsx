"use client";

import { motion } from "motion/react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const menuCategories = [
    {
        title: "Ice Coffee",
        items: [
            { name: "Salted Caramel", price: "15K" },
            { name: "Butter Scotch", price: "15K" },
            { name: "Peppermint", price: "15K" },
            { name: "Gula Aren", price: "15K" },
            { name: "Hazelnut", price: "15K" },
            { name: "Avocado", price: "15K" },
            { name: "Vanilla Regal", price: "18K" },
        ],
    },
    {
        title: "Coffee",
        items: [
            { name: "Americano Ice", price: "12K" },
            { name: "Americano Hot", price: "10K" },
            { name: "Milk Coffee Ice", price: "15K" },
            { name: "Milk Coffee Hot", price: "12K" },
        ],
    },
    {
        title: "Non Coffee",
        items: [
            { name: "Dark Choco", price: "15K" },
            { name: "Choco Hazelnut", price: "15K" },
            { name: "Avocado Choco", price: "15K" },
            { name: "Vanilla Regal", price: "18K" },
            { name: "Red Velvet", price: "15K" },
        ],
    },
    {
        title: "Snacks",
        items: [
            { name: "Chicken Dimsum", price: "10K" },
            { name: "Shrimp Dimsum", price: "10K" },
            { name: "Chicken Dumplings", price: "10K" },
        ],
    },
];

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="text-center mb-20"
                >
                    <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-4">
                        Menu
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto">
                        Crafted with passion. Served with pride.
                    </p>
                </motion.div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
                    {menuCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            <h2 className="text-4xl font-bold mb-8 border-b border-neutral-800 pb-4 text-yellow-500 font-script">
                                {category.title}
                            </h2>
                            <ul className="space-y-6">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex justify-between items-end group">
                                        <div className="flex-shrink-0">
                                            <h3 className="text-xl font-medium group-hover:text-yellow-500 transition-colors whitespace-nowrap">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <div className="flex-grow border-b border-dashed border-neutral-800 mx-4 mb-1 opacity-50"></div>
                                        <span className="text-xl font-bold text-neutral-300 whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
