"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Nutrition() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".nutri-elem", {
                y: 50,
                opacity: 0,
                stagger: 0.15,
                ease: "power2.out",
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="nutrition" className="relative z-10 w-full bg-onyx px-6 py-32 border-t border-white/5" ref={containerRef}>
            <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">

                <div className="nutri-elem w-[1px] h-24 bg-gold mb-12" />

                <h2 className="nutri-elem font-display text-4xl md:text-5xl lg:text-6xl text-titanium uppercase mb-8 leading-tight tracking-tighter">
                    Optimum Fuel. <br /> <span className="text-gold italic">Precision Metrics.</span>
                </h2>

                <p className="nutri-elem font-sans text-titanium/60 text-sm md:text-base max-w-2xl uppercase tracking-[0.2em] mb-20 leading-relaxed">
                    Nutrition is not a variable; it is the foundation. We provide scientifically calibrated macros and exact hydration strategies to ensure you perform at the pinnacle of your potential.
                </p>

                {/* Methodology Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">

                    {/* Box 1 */}
                    <div className="nutri-elem bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-left hover:border-gold/30 transition-colors duration-500 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full group-hover:bg-gold/10 transition-all duration-700" />
                        <h3 className="font-display text-2xl text-titanium uppercase mb-4 tracking-tighter relative z-10">Data-Driven <br />Macros</h3>
                        <p className="font-sans text-titanium/70 text-sm leading-relaxed tracking-wider relative z-10">
                            Zero guesswork. Every meal plan is mathematically calibrated to your specific metabolic rate and performance goals.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="nutri-elem bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-left hover:border-gold/30 transition-colors duration-500 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full group-hover:bg-gold/10 transition-all duration-700" />
                        <h3 className="font-display text-2xl text-titanium uppercase mb-4 tracking-tighter relative z-10">24/7 Tracking <br />& Support</h3>
                        <p className="font-sans text-titanium/70 text-sm leading-relaxed tracking-wider relative z-10">
                            You are <span className="text-gold font-bold">never alone</span>. Daily check-ins, macro adjustments on the fly, and constant accountability to keep you locked in.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="nutri-elem bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-left hover:border-gold/30 transition-colors duration-500 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full group-hover:bg-gold/10 transition-all duration-700" />
                        <h3 className="font-display text-2xl text-titanium uppercase mb-4 tracking-tighter relative z-10">Professional <br />Dieticians</h3>
                        <p className="font-sans text-titanium/70 text-sm leading-relaxed tracking-wider relative z-10">
                            Expert guidance. We don't just hand you a sheet; we educate you on the 'why' behind the fuel, ensuring sustainable dominance.
                        </p>
                    </div>

                </div>

                {/* Graphic: Progression Metrics */}
                <div className="nutri-elem w-full min-h-[380px] sm:min-h-0 sm:aspect-[16/9] md:aspect-[21/9] border border-white/10 rounded-3xl relative overflow-hidden group flex items-center justify-center p-8 bg-black/50 shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/20 to-transparent z-10 pointer-events-none" />

                    <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20 text-left max-w-sm">
                        <span className="font-sans text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold block mb-1 md:mb-2">Systematic Approach</span>
                        <span className="font-display text-2xl md:text-5xl text-titanium uppercase tracking-tighter mb-4 block">Performance Metrics</span>
                    </div>

                    {/* Infographic Grid Lines */}
                    <div className="absolute inset-0 z-0 flex flex-col justify-between pt-24 sm:pt-32 md:pt-40 pb-4 px-2 md:px-8 pointer-events-none opacity-20">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-full h-[1px] bg-titanium/30 border-b border-dashed border-titanium/50" />
                        ))}
                    </div>

                    {/* SVG Progression Graphic with Data Overlays */}
                    <div className="relative z-10 w-full max-w-4xl h-full flex flex-row items-end justify-between gap-1 sm:gap-2 md:gap-4 pt-24 sm:pt-32 md:pt-40 pb-4 px-2 md:px-8">
                        {[
                            { value: 45, label: "Phase 1" },
                            { value: 52, label: "Phase 2" },
                            { value: 61, label: "Phase 3" },
                            { value: 58, label: "Deload" },
                            { value: 72, label: "Phase 4" },
                            { value: 85, label: "Phase 5" },
                            { value: 92, label: "Peak" },
                            { value: 100, label: "Compete" },
                        ].map((data, i) => (
                            <div key={i} className="flex-1 bg-white/5 rounded-t-sm relative group/col hover:bg-white/10 transition-colors duration-500 flex flex-col justify-end" style={{ height: '100%' }}>

                                {/* Persistent Data Tooltip */}
                                <div
                                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex flex-col items-center pointer-events-none w-full z-30 opacity-100 translate-y-0`}
                                    style={{ bottom: `${data.value}%` }}
                                >
                                    <span className={`font-display text-lg md:text-2xl xl:text-3xl tracking-tighter ${i === 7 ? 'text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-titanium drop-shadow-lg'}`}>
                                        {data.value}<span className="text-[10px] md:text-sm">%</span>
                                    </span>
                                    <span className="text-titanium/60 font-sans text-[8px] md:text-[10px] tracking-widest uppercase mt-1 whitespace-nowrap">
                                        {data.label}
                                    </span>
                                </div>

                                {/* Animated Bar */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${data.value}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className={`w-full rounded-t-sm relative z-20 ${i === 7 ? 'bg-gold shadow-[0_0_20px_rgba(212,175,55,0.6)]' : 'bg-titanium/20'}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
