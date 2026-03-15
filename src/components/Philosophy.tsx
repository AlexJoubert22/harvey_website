"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRaw = "I don't just train bodies; I forge athletes. Whether you are stepping into the ring, preparing for Hyrox, or bulletproofing your joints, we build machines.";
    const words = textRaw.split(" ");

    useEffect(() => {
        if (!containerRef.current) return;

        // Animate the dynamically rendered span elements
        const spans = containerRef.current.querySelectorAll("span.word-reveal");

        const ctx = gsap.context(() => {
            gsap.fromTo(spans,
                { opacity: 0.1, color: "#ffffff" },
                {
                    opacity: 1,
                    color: "#D4AF37", // Gold
                    stagger: 0.1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 30%",
                        scrub: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative z-10 w-full bg-onyx py-16 md:py-24 border-t border-white/5 overflow-hidden flex flex-col justify-center">

            {/* Infinite Marquee via framer-motion */}
            <div className="w-full overflow-hidden whitespace-nowrap bg-gold/10 py-4 md:py-6 mb-10 md:mb-20 border-y border-gold/20 flex relative">
                <motion.div
                    className="flex whitespace-nowrap min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                >
                    {/* We duplicate the text multiple times to ensure continuous seamless looping */}
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="font-display font-bold text-2xl md:text-5xl text-gold uppercase tracking-tighter mx-4 px-4 inline-block">
                            NO EXCUSES • PUSH HARDER • TRAIN SMARTER •
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Philopsophy Scroll Reveal */}
            <div className="max-w-5xl mx-auto px-6 text-center" ref={containerRef}>
                <h2 className="font-sans text-titanium/50 text-sm md:text-base tracking-[0.3em] uppercase mb-8">
                    The Philosophy
                </h2>
                <p className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-7xl leading-tight uppercase text-titanium flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-2">
                    {words.map((word, index) => (
                        <span key={index} className="word-reveal opacity-10">
                            {word}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}
