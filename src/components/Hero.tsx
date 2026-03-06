"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Removed parallax crossfade as requested, keeping the main page visible.
    }, []);

    const headline = "UNLEASH YOUR PEAK PERFORMANCE.";
    const letters = headline.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: 0.4,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: [0.215, 0.61, 0.355, 1] as const, duration: 1 }
        },
    };

    return (
        <section className="relative w-full min-h-screen z-0 overflow-hidden bg-onyx flex flex-col justify-center items-start text-left px-8 md:px-16 lg:px-24">
            {/* The wrapper */}
            <div ref={heroRef} className="absolute inset-0 w-full h-full flex flex-col justify-center items-start origin-center px-8 md:px-16 lg:px-24">

                {/* Background Image Wrapper */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 z-0"
                    style={{ backgroundImage: "url('/hero.png')" }}
                />

                {/* Content Wrapper */}
                <div className="relative z-10 max-w-5xl flex flex-col items-start mt-8 md:mt-12">
                    <motion.h1
                        className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter uppercase text-titanium mb-6 overflow-hidden flex flex-wrap justify-start drop-shadow-2xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {letters.map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className={char === " " ? "w-[0.3em]" : "inline-block"}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
                        className="font-sans text-base md:text-lg lg:text-xl text-titanium/80 tracking-widest uppercase drop-shadow-lg max-w-3xl text-left leading-relaxed mb-10"
                    >
                        High-end personal training for every body. <br className="hidden md:block" /><span className="text-gold">Build strength, prevent injuries, and redefine your everyday limits.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2"
                    >
                        <a href="#services" className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-gold text-onyx font-sans text-xs uppercase tracking-widest font-bold hover:text-white shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 rounded-sm w-full sm:w-auto">
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Explore Protocols</span>
                            <div className="absolute inset-0 bg-onyx pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                        </a>
                        <a href="#contact" className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-titanium font-sans text-xs uppercase tracking-widest font-bold hover:border-gold hover:text-gold transition-all duration-500 rounded-sm w-full sm:w-auto backdrop-blur-sm">
                            <span className="relative z-10">Apply For Coaching</span>
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="font-sans text-xs tracking-[0.2em] text-titanium/50 uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-titanium/20 relative overflow-hidden">
                        <motion.div
                            className="w-full h-1/2 bg-gold absolute top-0"
                            animate={{ top: ["-50%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
