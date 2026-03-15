"use client";

// disciplines array and imports update
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Timer, Dumbbell, Flame, Bike, Zap, ShieldPlus, Swords, Award, X, Check, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const disciplines = [
    { id: 1, name: "Boxing", desc: "Striking & Evasion", icon: Swords, color: "#ef4444", fullDesc: "Master the sweet science from a professional fighter. Perfect your striking, head movement, and footwork while building elite-level cardiovascular conditioning and unbreakable mental toughness.", table: [{ label: "Technique Coaching", standard: "Cardio Kickboxing", cj: "Pro-Fighter Mechanics" }, { label: "Footwork Drill", standard: "Generic Static", cj: "Dynamic Ring Movement" }, { label: "Cardio Impact", standard: "Sub-Optimal Pace", cj: "Lactate Threshold Focus" }, { label: "Primary Focus", standard: "Sweating", cj: "Technical Precision" }] },
    { id: 2, name: "Hyrox", desc: "Endurance & Power", icon: Timer, color: "#f97316", fullDesc: "Dominate your next race. Functional fitness paired with endurance running to build an unbreakable engine, engineered specifically for the extreme physical demands of competitive Hyrox events.", table: [{ label: "Race Strategy", standard: "None / Wing It", cj: "Pacing & Station Tactics" }, { label: "Sled Mechanics", standard: "Inefficient Push/Pull", cj: "Optimized Leverage" }, { label: "Compromised Run", standard: "Ignored", cj: "Heavy Legs Conditioning" }, { label: "Primary Focus", standard: "General Fitness", cj: "Event Domination" }] },
    { id: 3, name: "Strength", desc: "Maximum Output", icon: Dumbbell, color: "#ffffff", fullDesc: "Build absolute power. Periodized programming focused on maximum output through heavy compound lifts. Increase your raw strength, muscular density, and overall foundational capacity.", table: [{ label: "Program Structure", standard: "Random Daily WODs", cj: "Elite Periodization" }, { label: "Progress Tracking", standard: "Guesswork", cj: "1RM & Volume Analytics" }, { label: "Lifting Form", standard: "Poor Mechanics", cj: "Biomechanical Safety" }, { label: "Primary Focus", standard: "Fatigue", cj: "Central Nervous System Power" }] },
    { id: 4, name: "Conditioning", desc: "Cardio Engine", icon: Flame, color: "#eab308", fullDesc: "Expand your aerobic capacity and lactate threshold. High-intensity engine work designed to make you untiring, relentless, and capable of sustaining peak physical output for longer.", table: [{ label: "Heart Rate Zones", standard: "Always Maximum (Zone 5)", cj: "Strategic Zone 2 to 5 Variation" }, { label: "Recovery Tracking", standard: "Ignored", cj: "HRV & Resting HR Data" }, { label: "Energy Systems", standard: "Glycolytic Only", cj: "Complete Aerobic Base" }, { label: "Primary Focus", standard: "Burn Calories", cj: "Limitless Engine" }] },
    { id: 5, name: "Cycling", desc: "Aerobic Capacity", icon: Bike, color: "#06b6d4", fullDesc: "Pedal with precision and purpose. Advanced cycling protocols to maximize power output, cadence efficiency, and endurance, whether you're dominating the road or pushing limits indoors.", table: [{ label: "Power Tracking", standard: "RPE (Feelings)", cj: "FTP & Wattage Targets" }, { label: "Pedal Stroke", standard: "Quad Dominant", cj: "Full 360 Degree Efficiency" }, { label: "Programming", standard: "Generic Spin Class", cj: "Periodized Power Build" }, { label: "Primary Focus", standard: "Leg Burn", cj: "Sustained Wattage Output" }] },
    { id: 6, name: "Plyometrics", desc: "Explosive Force", icon: Zap, color: "#a855f7", fullDesc: "Develop pure explosive force. Jump higher, sprint faster, and react quicker through targeted stretch-shortening cycle training that turns your muscle fibers into loaded springs.", table: [{ label: "Landing Mechanics", standard: "High Impact / Dangerous", cj: "Force Absorption Training" }, { label: "Ground Contact", standard: "Slow / Heavy", cj: "Minimal Ground Time" }, { label: "Volume Control", standard: "Endless Reps", cj: "CNS Preserving Dose" }, { label: "Primary Focus", standard: "Looking Cool", cj: "Raw Explosiveness" }] },
    { id: 7, name: "Injury Prevention", desc: "Prehab & Mobility", icon: ShieldPlus, color: "#22c55e", fullDesc: "Bulletproof your body. Pro-level prehab, mobility, and structural balance work to keep your joints healthy, correct imbalances, prevent setbacks, and keep you performing year-round.", table: [{ label: "Approach", standard: "Reactionary (Wait for Pain)", cj: "Proactive Prehab" }, { label: "Mobility Work", standard: "Static Stretching Only", cj: "End-Range Isometrics" }, { label: "Imbalance Check", standard: "Ignored", cj: "Unilateral Strength Tests" }, { label: "Primary Focus", standard: "Rehab", cj: "Unbreakable Resilience" }] },
    { id: 8, name: "Athletic Performance", desc: "Sport-Specific Speed", icon: Award, color: "#d4af37", fullDesc: "Perform like a pro on game day. Sport-specific speed, agility, and power development tailored to the exact biomechanical demands of your chosen sport or competitive discipline.", table: [{ label: "Drill Transfer", standard: "Gym Aesthetics", cj: "Direct Field/Court Transfer" }, { label: "Agility Focus", standard: "Cone Drills Only", cj: "Reactive & Chaos Agility" }, { label: "Speed Development", standard: "Treadmill Running", cj: "Acceleration Mechanics" }, { label: "Primary Focus", standard: "Looking Athletic", cj: "Dominating The Competition" }] }
];

export default function Disciplines() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedDiscipline, setSelectedDiscipline] = useState<typeof disciplines[0] | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const cards = containerRef.current.querySelectorAll('.service-card');

        const ctx = gsap.context(() => {
            gsap.fromTo(cards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    ease: "power2.out",
                    duration: 0.4,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    // Handle scroll locking when modal is open
    useEffect(() => {
        if (selectedDiscipline) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedDiscipline]);

    return (
        <section
            id="services"
            className="relative z-10 w-full bg-onyx px-4 md:px-6 py-16 md:py-32 border-t border-white/5 flex flex-col justify-center"
        >
            <div className="max-w-7xl mx-auto w-full" ref={containerRef}>
                <div className="mb-10 md:mb-20 text-center flex flex-col items-center">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-titanium uppercase mb-6 tracking-tighter">
                        Services
                    </h2>
                    <div className="w-12 h-[2px] bg-gold mb-6" />
                    <p className="font-sans text-titanium/50 text-sm md:text-base max-w-xl uppercase tracking-widest leading-relaxed">
                        Specialized training protocols designed to forge elite performance and shatter conventional limits.
                    </p>
                </div>

                {/* Minimalist Elegant Photo Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {disciplines.map((item) => (
                        <div
                            key={item.id}
                            className="service-card group relative aspect-[4/5] bg-onyx overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-700 cursor-pointer rounded-2xl"
                            style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 10px 40px -10px ${item.color}40`;
                                e.currentTarget.style.borderColor = `${item.color}60`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                                e.currentTarget.style.borderColor = `rgba(255,255,255,0.1)`;
                            }}
                            onClick={() => setSelectedDiscipline(item)}
                        >
                            {/* Illuminated Icon Background (Always Visible) */}
                            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-100 transition-opacity duration-700">
                                {/* Ambient Glow */}
                                <div
                                    className="absolute w-40 h-40 md:w-48 md:h-48 blur-[60px] md:blur-[80px] rounded-full opacity-20 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-110"
                                    style={{ backgroundColor: item.color }}
                                />
                                {/* Modern Glowing Icon */}
                                <item.icon
                                    size={150}
                                    strokeWidth={1}
                                    className="text-white opacity-90 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
                                    style={{
                                        color: "#ffffff",
                                        filter: `drop-shadow(0px 0px 8px ${item.color}) drop-shadow(0px 0px 20px ${item.color}80) drop-shadow(0px 0px 40px ${item.color}50)`
                                    }}
                                />
                            </div>

                            {/* Content Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/70 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-60" />

                            {/* Text Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 pointer-events-none">
                                <span className="font-sans text-gold text-xs tracking-[0.3em] font-bold mb-3 transition-colors duration-500" style={{ color: item.color }}>{String(item.id).padStart(2, '0')}</span>
                                <h3 className="font-display text-3xl text-titanium uppercase tracking-tighter mb-2 drop-shadow-lg">
                                    {item.name}
                                </h3>
                                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out">
                                    <p className="font-sans text-titanium/80 text-xs tracking-widest uppercase mt-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 mix-blend-plus-lighter">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Interactive Detail Modal Expanded */}
            <AnimatePresence>
                {selectedDiscipline && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-end md:items-center justify-center md:p-8 bg-onyx/90 backdrop-blur-xl"
                        onClick={() => setSelectedDiscipline(null)}
                    >
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-4xl bg-[#030303] border border-white/10 rounded-t-3xl md:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] md:max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                boxShadow: `0 -10px 60px -10px rgba(0,0,0,0.6), 0 0 60px -15px ${selectedDiscipline.color}20`
                            }}
                        >
                            {/* Sticky top bar — always visible, has close button */}
                            <div className="flex items-center justify-between px-6 md:px-10 pt-5 pb-4 border-b border-white/5 shrink-0">
                                {/* Drag handle (mobile hint) */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0"
                                        style={{ color: selectedDiscipline.color }}
                                    >
                                        <selectedDiscipline.icon size={22} strokeWidth={1.2} style={{ filter: `drop-shadow(0px 0px 8px ${selectedDiscipline.color}60)` }} />
                                    </div>
                                    <div>
                                        <span className="font-sans text-[9px] tracking-[0.35em] font-bold uppercase block" style={{ color: selectedDiscipline.color }}>
                                            Protocol / 0{selectedDiscipline.id}
                                        </span>
                                        <h3 className="font-display text-xl md:text-3xl text-titanium uppercase tracking-tighter leading-none">
                                            {selectedDiscipline.name}
                                        </h3>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedDiscipline(null)}
                                    className="text-titanium/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ml-4 shrink-0"
                                    aria-label="Close"
                                >
                                    <X size={20} strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Scrollable content area */}
                            <div className="overflow-y-auto flex-1 p-6 md:p-10 flex flex-col gap-8 overscroll-contain">

                                {/* Background Glow */}
                                <div
                                    className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-10 pointer-events-none"
                                    style={{ backgroundColor: selectedDiscipline.color }}
                                />

                                <p className="font-sans text-titanium/70 text-base md:text-lg leading-relaxed tracking-wide font-light">
                                    {selectedDiscipline.fullDesc}
                                </p>

                                <div className="w-full h-[1px] bg-white/10" />

                                {/* Comparative Section */}
                                <div className="w-full">
                                    <h4 className="font-display text-xl md:text-2xl text-titanium uppercase tracking-tighter mb-5">
                                        The <span className="text-gold italic">Advantage</span>
                                    </h4>

                                    <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-black/50">
                                        <div className="grid grid-cols-3 border-b border-white/10 bg-white/5 py-3 px-4 md:px-6">
                                            <div className="col-span-1 font-sans text-[9px] uppercase tracking-widest text-titanium/50">Metric</div>
                                            <div className="col-span-1 font-sans text-[9px] uppercase tracking-widest text-titanium/50 text-center">Standard</div>
                                            <div className="col-span-1 font-sans text-[9px] uppercase tracking-widest text-gold text-center font-bold">CJ Standard</div>
                                        </div>

                                        {selectedDiscipline.table.map((row, idx) => (
                                            <div key={idx} className="grid grid-cols-3 border-b border-white/5 last:border-0 py-3 px-4 md:px-6 items-center hover:bg-white/5 transition-colors">
                                                <div className="col-span-1 font-sans text-[10px] uppercase tracking-wider text-titanium/80 leading-tight">{row.label}</div>
                                                <div className="col-span-1 flex flex-col items-center justify-center gap-1 font-sans text-[9px] md:text-xs text-titanium/40">
                                                    <Minus size={10} className="text-red-500/50 shrink-0" />
                                                    <span className="text-center leading-tight">{row.standard}</span>
                                                </div>
                                                <div className="col-span-1 flex flex-col items-center justify-center gap-1 font-sans text-[9px] md:text-xs text-titanium">
                                                    <Check size={10} className="text-gold shrink-0" />
                                                    <span className="font-bold text-center leading-tight">{row.cj}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 pb-2">
                                    <a href="#contact" onClick={() => setSelectedDiscipline(null)} className="group relative overflow-hidden inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-gold text-onyx font-sans text-sm uppercase tracking-widest font-bold hover:text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 rounded-lg">
                                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Secure Your Spot</span>
                                        <div className="absolute inset-0 bg-onyx pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                                    </a>
                                    <p className="font-sans text-[9px] text-titanium/40 uppercase tracking-widest text-center">
                                        * Objective results demand objective science. We don't negotiate with mediocrity.
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
