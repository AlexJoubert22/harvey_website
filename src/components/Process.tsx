"use client";

import { motion } from "framer-motion";
import { Phone, Search, FileText, TrendingUp } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Free\nConsultation",
        subtitle: "30-Min Discovery Call",
        description: "A no-commitment call to discuss your goals, training history, and lifestyle. I assess your ambitions and determine exactly how to engineer your transformation.",
        icon: Phone,
        glowColor: "#D4AF37",
    },
    {
        number: "02",
        title: "Physical\nAssessment",
        subtitle: "Full Body Evaluation",
        description: "Comprehensive movement screening, strength and endurance baseline tests, and injury history review. This data becomes the foundation of your entire program.",
        icon: Search,
        glowColor: "#22D3EE",
    },
    {
        number: "03",
        title: "Custom\nBlueprint",
        subtitle: "Periodized Programming",
        description: "Your training plan is engineered from scratch. Every session, every set, every rep has a purpose — mapped to your metabolic profile and performance goals.",
        icon: FileText,
        glowColor: "#A78BFA",
    },
    {
        number: "04",
        title: "Train &\nEvolve",
        subtitle: "Ongoing Elite Coaching",
        description: "Sessions, weekly check-ins, plan adjustments, and constant support. We track every metric and iterate relentlessly until you hit your ceiling — then we raise it.",
        icon: TrendingUp,
        glowColor: "#34D399",
    },
];

// Performance line chart
const dataPoints = [
    { x: 30,  y: 141, label: "W1" },
    { x: 90,  y: 125, label: "W2" },
    { x: 150, y: 130, label: "W3" },
    { x: 210, y: 103, label: "W4" },
    { x: 270, y: 77,  label: "W5" },
    { x: 330, y: 61,  label: "W6" },
    { x: 390, y: 44,  label: "W7" },
    { x: 450, y: 24,  label: "W8" },
];
const linePath = "M 30,141 L 90,125 L 150,130 L 210,103 L 270,77 L 330,61 L 390,44 L 450,24";
const areaPath = "M 30,141 L 90,125 L 150,130 L 210,103 L 270,77 L 330,61 L 390,44 L 450,24 L 450,170 L 30,170 Z";

// Athlete metric bars
const metrics = [
    { label: "Strength",     target: 88, color: "#D4AF37" },
    { label: "Endurance",    target: 74, color: "#22D3EE" },
    { label: "Power Output", target: 82, color: "#A78BFA" },
    { label: "Recovery",     target: 67, color: "#34D399" },
    { label: "Body Comp",    target: 76, color: "#F472B6" },
];

function PerformanceChart() {
    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-5 hover:border-white/20 transition-colors duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-display text-sm uppercase tracking-widest text-titanium">Performance Index</h3>
                    <p className="font-sans text-titanium/40 text-[10px] uppercase tracking-[0.3em] mt-1">12-Week Progression</p>
                </div>
                <div className="flex items-center gap-2">
                    <motion.div
                        className="w-2 h-2 rounded-full bg-gold"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="font-sans text-[9px] uppercase tracking-widest text-gold/80">Live</span>
                </div>
            </div>

            <svg viewBox="0 0 470 195" className="w-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="processAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                    <filter id="processLineGlow" x="-20%" y="-50%" width="140%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Horizontal grid lines */}
                {[10, 50, 90, 130, 170].map((y) => (
                    <line key={y} x1="30" y1={y} x2="450" y2={y}
                        stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 6" />
                ))}

                {/* Y-axis labels */}
                <text x="22" y="14"  textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">100</text>
                <text x="22" y="54"  textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">75</text>
                <text x="22" y="94"  textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">50</text>
                <text x="22" y="134" textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">25</text>

                {/* X-axis labels */}
                {dataPoints.map((pt) => (
                    <text key={pt.label} x={pt.x} y="188"
                        textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="monospace">
                        {pt.label}
                    </text>
                ))}

                {/* Animated area fill */}
                <motion.path
                    d={areaPath}
                    fill="url(#processAreaGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{
                        duration: 5.5, times: [0, 0.5, 0.65, 0.85, 1],
                        repeat: Infinity, repeatDelay: 1, ease: "easeInOut",
                    }}
                />

                {/* Animated line */}
                <motion.path
                    d={linePath}
                    stroke="#D4AF37" strokeWidth="2"
                    fill="none" strokeLinecap="round" strokeLinejoin="round"
                    filter="url(#processLineGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: 5.5, times: [0, 0.55, 0.85, 1],
                        repeat: Infinity, repeatDelay: 1, ease: "easeInOut",
                    }}
                />

                {/* Data point dots */}
                {dataPoints.map((pt, i) => (
                    <motion.circle
                        key={i} cx={pt.x} cy={pt.y} r="3.5"
                        fill="#D4AF37"
                        style={{ filter: "drop-shadow(0 0 4px #D4AF37)" }}
                        animate={{ opacity: [0, 0, 1, 1, 0] }}
                        transition={{
                            duration: 5.5,
                            times: [0, Math.min(0.1 + i * 0.055, 0.63), Math.min(0.18 + i * 0.055, 0.68), 0.85, 1],
                            repeat: Infinity, repeatDelay: 1,
                        }}
                    />
                ))}

                {/* End-point value callout */}
                <motion.text
                    x="455" y="20"
                    fill="#D4AF37" fontSize="10" fontFamily="monospace" fontWeight="bold"
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{
                        duration: 5.5, times: [0, 0.6, 0.72, 0.85, 1],
                        repeat: Infinity, repeatDelay: 1,
                    }}
                >
                    +91%
                </motion.text>
            </svg>
        </div>
    );
}

function MetricsChart() {
    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 hover:border-white/20 transition-colors duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-display text-sm uppercase tracking-widest text-titanium">Athlete Profile</h3>
                    <p className="font-sans text-titanium/40 text-[10px] uppercase tracking-[0.3em] mt-1">Avg. Client Improvements</p>
                </div>
                <div className="flex items-center gap-2">
                    <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#22D3EE" }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <span className="font-sans text-[9px] uppercase tracking-widest" style={{ color: "#22D3EE80" }}>Tracking</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 flex-1 justify-center">
                {metrics.map((metric, i) => (
                    <div key={metric.label} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="font-sans text-[10px] uppercase tracking-widest text-titanium/50">
                                {metric.label}
                            </span>
                            <motion.span
                                className="font-sans text-[10px] uppercase tracking-widest font-bold tabular-nums"
                                style={{ color: metric.color }}
                                animate={{ opacity: [0, 0, 1, 1, 0] }}
                                transition={{
                                    duration: 4.5,
                                    times: [0, 0.35 + i * 0.05, 0.55 + i * 0.05, 0.85, 1],
                                    repeat: Infinity, repeatDelay: 0.5, delay: i * 0.25,
                                }}
                            >
                                +{metric.target}%
                            </motion.span>
                        </div>
                        <div className="h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                className="h-full rounded-full absolute top-0 left-0"
                                style={{
                                    backgroundColor: metric.color,
                                    boxShadow: `0 0 10px ${metric.color}90`,
                                }}
                                animate={{ width: ["0%", `${metric.target}%`, `${metric.target}%`, "0%"] }}
                                transition={{
                                    duration: 4.5, times: [0, 0.6, 0.85, 1],
                                    repeat: Infinity, repeatDelay: 0.5,
                                    delay: i * 0.25, ease: [0.16, 1, 0.3, 1],
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Process() {
    return (
        <section id="process" className="relative z-10 w-full bg-onyx px-4 md:px-6 py-16 md:py-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-titanium/10 pb-12 mb-20"
                >
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-titanium uppercase leading-tight tracking-tighter max-w-2xl">
                        How it <span className="text-gold italic block">Works.</span>
                    </h2>
                    <p className="font-sans text-titanium/50 text-sm md:text-base tracking-widest uppercase max-w-xs text-left md:text-right">
                        Transformation doesn't happen by accident. Every journey follows this precision protocol.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 relative">

                    {/* Desktop connecting line — multicolor gradient */}
                    <div
                        className="hidden lg:block absolute top-[26px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-[1px] z-0"
                        style={{ background: "linear-gradient(to right, #D4AF3730, #22D3EE30, #A78BFA30, #34D39930)" }}
                    />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex flex-col gap-6 group"
                        >
                            {/* Icon circle */}
                            <div className="flex items-center gap-4 lg:block">
                                <div
                                    className="relative z-10 w-[52px] h-[52px] rounded-full border flex items-center justify-center shrink-0 bg-onyx transition-all duration-500 group-hover:scale-110"
                                    style={{
                                        borderColor: `${step.glowColor}50`,
                                        boxShadow: `0 0 24px ${step.glowColor}15`,
                                    }}
                                >
                                    <step.icon
                                        size={20} strokeWidth={1.5}
                                        style={{
                                            color: step.glowColor,
                                            filter: `drop-shadow(0 0 6px ${step.glowColor}80)`,
                                        }}
                                    />
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="flex-1 h-[1px] bg-white/10 md:hidden" />
                                )}
                            </div>

                            <div className="flex flex-col gap-3">
                                {/* Static bright glow number */}
                                <span
                                    className="font-display text-[72px] xl:text-[88px] tracking-tighter leading-none select-none block"
                                    style={{
                                        color: step.glowColor,
                                        opacity: 0.55,
                                        textShadow: `0 0 20px ${step.glowColor}, 0 0 60px ${step.glowColor}90, 0 0 120px ${step.glowColor}40`,
                                    }}
                                >
                                    {step.number}
                                </span>

                                <div className="-mt-4">
                                    <h3 className="font-display text-2xl xl:text-3xl text-titanium uppercase tracking-tighter leading-tight whitespace-pre-line mb-2">
                                        {step.title}
                                    </h3>
                                    <span
                                        className="font-sans text-[10px] tracking-[0.35em] uppercase font-bold"
                                        style={{ color: step.glowColor }}
                                    >
                                        {step.subtitle}
                                    </span>
                                </div>

                                <p className="font-sans text-titanium/60 text-sm leading-relaxed tracking-wide">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Analytics Charts */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20"
                >
                    <PerformanceChart />
                    <MetricsChart />
                </motion.div>

                {/* CTA */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="#contact"
                        className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 bg-gold text-onyx font-sans text-xs uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 rounded-sm w-full sm:w-auto"
                    >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Book Your Free Consultation</span>
                        <div className="absolute inset-0 bg-onyx pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    </a>
                    <span className="font-sans text-titanium/40 text-[10px] uppercase tracking-widest text-center">
                        No commitment. No hard sell. Just results.
                    </span>
                </div>

            </div>
        </section>
    );
}
