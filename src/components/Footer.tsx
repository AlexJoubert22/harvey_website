"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

// Placeholder custom icons for WhatsApp/TikTok using minimal SVGs Since lucide doesn't have them all
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

export default function Footer() {
    const contacts = [
        { name: "WhatsApp", icon: <WhatsAppIcon />, href: "https://wa.me/447760401994" },
        { name: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/active_with_cj/" },
        { name: "TikTok", icon: <TikTokIcon />, href: "https://www.tiktok.com/@_cj_harvey?lang=es" },
        { name: "Email", icon: <Mail />, href: "mailto:cjh1828@outlook.com" },
    ];

    return (
        <>
            <section id="contact" className="relative z-10 w-full min-h-[60vh] py-20 md:py-32 border-t border-white/5 text-titanium flex flex-col justify-center overflow-hidden">
                {/* Background Image - bg-top shows cyclist, crops bottom */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat z-0"
                    style={{ backgroundImage: "url('/fondo2.png')" }}
                />
                {/* Gradient Overlay for Readability - Minimal masking */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-onyx/80 via-black/15 to-transparent z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 w-full">

                    {/* Left Side: Typography & Location */}
                    <div className="flex flex-col justify-center">
                        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-titanium uppercase mb-8 leading-[0.9] tracking-tighter">
                            Ready <br /> To <br /> <span className="text-gold italic">Work?</span>
                        </h2>
                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <p className="relative z-10 font-sans text-titanium/80 text-base md:text-xl uppercase tracking-widest leading-relaxed">
                                In-person training in <span className="text-gold font-bold">Oxford, England</span> and global online coaching.
                            </p>
                        </div>

                        {/* Direct contact details — visible for noting down */}
                        <div className="mt-5 flex flex-col gap-3">
                            <a href="tel:+447760401994" className="flex items-center gap-3 group w-fit">
                                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/20 transition-colors duration-300 shrink-0">
                                    <Phone size={12} className="text-gold" />
                                </div>
                                <span className="font-sans text-titanium/80 text-sm tracking-widest select-all group-hover:text-gold transition-colors duration-300">
                                    +44 7760 401994
                                </span>
                            </a>
                            <a href="mailto:cjh1828@outlook.com" className="flex items-center gap-3 group w-fit">
                                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/20 transition-colors duration-300 shrink-0">
                                    <Mail size={12} className="text-gold" />
                                </div>
                                <span className="font-sans text-titanium/80 text-sm tracking-widest select-all group-hover:text-gold transition-colors duration-300">
                                    cjh1828@outlook.com
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Magnetic Contact Bubbles */}
                    <div className="flex flex-col justify-center items-start lg:items-end gap-6 w-full">
                        {contacts.map((contact, index) => (
                            <MagneticBubble key={index} contact={contact} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Actual Footer - Solid Dark Background */}
            <footer className="relative z-10 w-full bg-black/70 backdrop-blur-sm py-8 md:py-12 border-t border-white/5 text-titanium flex flex-col items-center justify-center overflow-hidden">
                {/* Bottom Links & Legal */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

                    {/* Copyright & Role (Left) */}
                    <div className="flex items-center gap-3">
                        {/* Circular logo */}
                        <img
                            src="/logo.jpg"
                            alt="Active With CJ"
                            className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
                        />
                        <div className="flex flex-col items-start gap-1 opacity-60">
                            <span className="font-sans text-[10px] tracking-[0.2em] text-titanium uppercase font-bold">
                                Elite Performance Coach
                            </span>
                            <p className="font-sans text-[9px] tracking-[0.2em] text-titanium uppercase">
                                © 2026 CJ HARVEY. ALL RIGHTS RESERVED.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links (Center) */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        <a href="#about" className="font-sans text-[10px] tracking-[0.3em] text-titanium uppercase hover:text-gold transition-colors duration-300">About</a>
                        <a href="#services" className="font-sans text-[10px] tracking-[0.3em] text-titanium uppercase hover:text-gold transition-colors duration-300">Services</a>
                        <a href="#process" className="font-sans text-[10px] tracking-[0.3em] text-titanium uppercase hover:text-gold transition-colors duration-300">Process</a>
                        <a href="#pricing" className="font-sans text-[10px] tracking-[0.3em] text-titanium uppercase hover:text-gold transition-colors duration-300">Pricing</a>
                        <a href="#contact" className="font-sans text-[10px] tracking-[0.3em] text-titanium uppercase hover:text-gold transition-colors duration-300">Contact</a>
                    </div>

                    {/* Location (Right) */}
                    <div className="flex items-center justify-center md:justify-end opacity-60">
                        <span className="font-sans text-[10px] tracking-[0.2em] text-titanium uppercase">
                            Oxford, UK
                        </span>
                    </div>

                </div>
            </footer>
        </>
    );
}

// Magnetic Bubble Component
function MagneticBubble({ contact }: { contact: { name: string, icon: React.ReactNode, href: string } }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={ref}
            href={contact.href}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group relative flex items-center justify-between w-full md:w-[400px] p-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 overflow-hidden"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-md" />
            <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

            <div className="relative z-10 flex items-center gap-6 pointer-events-none">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-onyx flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-onyx transition-all duration-500">
                    {contact.icon}
                </div>
                <span className="font-display text-2xl uppercase text-titanium group-hover:text-gold transition-colors duration-500 tracking-wide">
                    {contact.name}
                </span>
            </div>

            <div className="relative z-10 w-8 h-8 rounded-full bg-onyx flex items-center justify-center group-hover:bg-gold transition-colors duration-500 pointer-events-none">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-titanium group-hover:text-onyx"
                    animate={{ rotate: position.x || position.y ? -45 : 0 }}
                >
                    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                </motion.svg>
            </div>
        </motion.a>
    );
}
