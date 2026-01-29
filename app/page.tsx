import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";
import SequenceScroll from "@/components/SequenceScroll";
import TextReveal from "@/components/ui/TextReveal";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import CountUp from "@/components/ui/CountUp";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import CTA from "@/components/ui/CTA";
import Footer from "@/components/ui/Footer";
import { Coffee, MapPin, Award, Users } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white w-full">
            <Preloader />
            <Navbar />

            {/* Hero Section with Scrollytelling */}
            <section className="relative z-0">
                <SequenceScroll />
            </section>

            {/* Content wrapper overlapping the end of the scroll sequence */}
            <div className="relative z-20 -mt-[100dvh] bg-black rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10">

                {/* About Section */}
                <section id="about" className="py-24 px-6 md:px-20 min-h-screen flex items-center bg-black">
                    <div className="max-w-4xl">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8">The Philosophy</h2>
                        <TextReveal
                            text="Coffee is more than a beverage. It is a ritual. A moment of silence in a chaotic world. At Trike, we obsess over every bean, every roast, every pour, to bring you a cup that transcends the ordinary."
                            className="text-4xl md:text-6xl font-medium leading-tight text-white"
                        />
                    </div>
                </section>

                {/* Bento Grid Gallery */}
                <section id="products" className="py-24 px-6 md:px-12 bg-neutral-950">
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Curated Excellence</h2>
                    <BentoGrid className="max-w-7xl mx-auto auto-rows-[20rem]">
                        <BentoCard
                            title="Ethiopian Yirgacheffe"
                            description="Floral notes with a citrus finish. Light roast."
                            header={<div className="flex-1 w-full h-full bg-neutral-800 rounded-xl relative overflow-hidden group"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-70"></div></div>}
                            className="md:col-span-2"
                        />
                        <BentoCard
                            title="Colombia Supremo"
                            description="Rich body with chocolate and nutty undertones."
                            header={<div className="flex-1 w-full h-full bg-neutral-800 rounded-xl relative overflow-hidden group"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514432324607-a09d72479db1?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-70"></div></div>}
                            className="md:col-span-1"
                        />
                        <BentoCard
                            title="Equipment"
                            description="Professional grade brewing gear."
                            header={<div className="flex-1 w-full h-full bg-neutral-800 rounded-xl relative overflow-hidden group"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-70"></div></div>}
                            className="md:col-span-1"
                        />
                        <BentoCard
                            title="Subscriptions"
                            description="Fresh roasted coffee delivered to your door."
                            header={<div className="flex-1 w-full h-full bg-neutral-800 rounded-xl relative overflow-hidden group"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-70"></div></div>}
                            className="md:col-span-2"
                        />
                    </BentoGrid>
                </section>

                {/* Stats Section */}
                <section className="py-24 px-6 bg-black border-y border-neutral-900">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        <CountUp value={15} suffix="+" label="Locations" />
                        <CountUp value={2040} suffix="" label="Farmers Supported" />
                        <CountUp value={12} suffix="k" label="Happy Drinkers" />
                        <CountUp value={98} suffix="%" label="Sustainability Score" />
                    </div>
                </section>

                {/* Testimonials */}
                <section id="stories">
                    <TestimonialSlider />
                </section>

                {/* CTA */}
                <CTA />

                <section id="contact">
                    <Footer />
                </section>
            </div>
        </main>
    );
}
