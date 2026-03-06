"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";

export default function About() {
    return (
        <section id="about" className="relative z-10 w-full bg-onyx px-4 md:px-6 py-32 border-t border-white/5 overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-gold/[0.03] blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/[0.025] blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-titanium/10 pb-12"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-gold" />
                            <span className="font-sans text-gold text-[10px] uppercase tracking-[0.4em] font-bold">The Coach</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-titanium uppercase leading-tight tracking-tighter max-w-2xl">
                            Who is <span className="text-gold italic block">CJ Harvey?</span>
                        </h2>
                    </div>
                    <p className="font-sans text-titanium/50 text-sm md:text-base tracking-widest uppercase max-w-xs text-left md:text-right">
                        Architect of human performance. Demanding excellence.
                    </p>
                </motion.div>

                {/* Grid Layout (Bento Style) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Main Bio Box (Spans 8 cols on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-8 bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative group hover:border-gold/30 transition-colors duration-500 min-h-[400px]"
                    >
                        {/* Top gold accent line */}
                        <div className="h-[2px] w-full bg-gradient-to-r from-gold via-gold/40 to-transparent" />

                        <div className="p-8 md:p-12 flex flex-col justify-end relative h-full">
                            {/* Large decorative background quote */}
                            <div
                                aria-hidden="true"
                                className="absolute top-4 right-6 font-display leading-none text-gold/[0.04] select-none pointer-events-none group-hover:text-gold/[0.08] transition-all duration-700"
                                style={{ fontSize: "clamp(140px, 18vw, 220px)" }}
                            >
                                "
                            </div>

                            <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 blur-[110px] rounded-full group-hover:bg-gold/20 transition-all duration-700" />

                            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-titanium uppercase mb-6 relative z-10 leading-[1.1] w-full text-balance">
                                Chasing <span className="text-gold italic">Audacious</span><br className="hidden md:block" /> Goals.
                            </h3>
                            <div className="space-y-4 font-sans text-titanium/70 text-sm md:text-base leading-relaxed tracking-wider relative z-10 max-w-2xl">
                                <p>
                                    I'm CJ—a high-energy, ambitious coach who believes in pushing boundaries. My expertise spans across disciplines: from personal training and strength & conditioning, to specialized coaching in boxing and football. My mission is simple: to help you become stronger, fitter, and undeniably more confident.
                                </p>
                                <p>
                                    Fitness isn't just a career; it's the core of my lifestyle. I train the way I coach—embracing weightlifting, competitive HYROX, combat sports, and endurance cycling. I love challenging myself physically and mentally, and sharing that journey as a content creator to inspire others.
                                </p>
                                <p>
                                    My next frontier? An incredible adventure cycling from the UK all the way to Australia. It's a testament to my passion for endurance, adventure, and proving that with the right mindset, no dream is too big. This is the energy I bring to every session.
                                </p>
                            </div>

                            {/* Discipline tags */}
                            <div className="flex flex-wrap gap-2 mt-8 relative z-10">
                                {["Strength & Conditioning", "HYROX", "Boxing", "Cycling", "Football"].map((tag) => (
                                    <span key={tag} className="font-sans text-[9px] uppercase tracking-widest text-gold/70 border border-gold/20 px-3 py-1 rounded-full bg-gold/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Box (Spans 4 cols on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-4 bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative group min-h-[300px] md:min-h-0"
                    >
                        <div className="absolute inset-0 bg-onyx/20 z-10 group-hover:bg-transparent transition-all duration-500" />
                        <img
                            src="/fondo1.png"
                            alt="CJ Trainer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Bottom gradient fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-onyx/90 to-transparent z-20" />
                        <div className="absolute bottom-6 left-6 z-30 flex flex-col gap-2">
                            <span className="bg-gold text-onyx font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-full w-fit">Elite Coach</span>
                            <span className="font-sans text-titanium/50 text-[9px] uppercase tracking-widest">Oxford, England</span>
                        </div>
                    </motion.div>

                    {/* 3-Part Stats Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4 min-h-[300px]"
                    >
                        {/* Section 1: Gold */}
                        <div className="bg-gold/10 border border-gold/20 rounded-2xl p-4 flex-1 flex flex-col justify-center hover:bg-gold/20 transition-colors relative overflow-hidden group/stat">
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300" />
                            <h4 className="font-display text-3xl xl:text-4xl text-gold uppercase tracking-tighter relative z-10">
                                <StatCounter to={10} suffix="+" duration={1.8} />
                            </h4>
                            <span className="font-sans text-titanium/80 uppercase tracking-widest text-[10px] xl:text-xs font-bold relative z-10">Years Experience</span>
                        </div>
                        {/* Section 2: Titanium/White */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 flex flex-col justify-center hover:bg-white/10 transition-colors relative overflow-hidden group/stat">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300" />
                            <h4 className="font-display text-3xl xl:text-4xl text-titanium uppercase tracking-tighter relative z-10">
                                <StatCounter to={500} suffix="+" duration={2} />
                            </h4>
                            <span className="font-sans text-titanium/60 uppercase tracking-widest text-[10px] xl:text-xs relative z-10">Athletes Forged</span>
                        </div>
                        {/* Section 3: Onyx Dark */}
                        <div className="bg-black/40 border border-black/50 rounded-2xl p-4 flex-1 flex flex-col justify-center hover:bg-black/60 transition-colors shadow-inner">
                            <h4 className="font-display text-3xl xl:text-4xl text-titanium uppercase tracking-tighter">
                                <StatCounter to={1} suffix="" duration={1} />
                            </h4>
                            <span className="font-sans text-titanium/40 uppercase tracking-widest text-[10px] xl:text-xs">Elite Standard</span>
                        </div>
                    </motion.div>

                    {/* Precision Methodology Box - Split in 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-4 min-h-[300px]"
                    >
                        <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 flex-1 hover:bg-gold/20 transition-colors duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold/10" />
                            <h4 className="font-display text-lg lg:text-xl text-gold uppercase mb-2">Science-Backed</h4>
                            <p className="font-sans text-titanium/80 text-xs leading-relaxed uppercase tracking-wider">Every training block is meticulously programmed mapping to your metabolic rate.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/30 to-white/5" />
                            <h4 className="font-display text-lg lg:text-xl text-titanium uppercase mb-2">Relentless Execution</h4>
                            <p className="font-sans text-titanium/60 text-xs leading-relaxed uppercase tracking-wider">We focus on perfect form and high intensity to forge physical resilience.</p>
                        </div>
                        <div className="bg-black/40 border border-black/50 rounded-2xl p-6 flex-1 shadow-inner hover:bg-black/60 transition-colors duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-titanium/20 to-transparent" />
                            <h4 className="font-display text-lg lg:text-xl text-titanium uppercase mb-2">Elite Mindset</h4>
                            <p className="font-sans text-titanium/40 text-xs leading-relaxed uppercase tracking-wider">Physicality follows mentality. We build discipline that translates to everyday life.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
