import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Cafe Trike - Tricycle Mini Coffee",
    description: "Experience the journey of Trike Coffee.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} font-sans antialiased bg-black text-white`}>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
