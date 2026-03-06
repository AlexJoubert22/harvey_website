"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const sessionPacks = [
    {
        id: "single",
        name: "Single Session",
        tag: null,
        price: "£40",
        period: "per session",
        perSession: "£40 / session",
        savings: null,
        description: "The entry point. No commitment, no contract. Book when you need it.",
        features: [
            "60-min personal training session",
            "Bespoke session programming",
            "Real-time form & technique coaching",
        ],
        cta: "Book a Session",
        highlight: false,
    },
    {
        id: "pack5",
        name: "5-Session Pack",
        tag: null,
        price: "£185",
        period: "per pack",
        perSession: "£37 / session",
        savings: "Save £15",
        description: "Build momentum. A structured block to kickstart your progress.",
        features: [
            "5 × 60-min training sessions",
            "Bespoke session programming",
            "Real-time form & technique coaching",
            "WhatsApp support between sessions",
        ],
        cta: "Get This Pack",
        highlight: false,
    },
    {
        id: "pack10",
        name: "10-Session Pack",
        tag: "Most Popular",
        price: "£320",
        period: "per pack",
        perSession: "£32 / session",
        savings: "Save £80",
        description: "A full training block. Measurable progress, guaranteed results.",
        features: [
            "10 × 60-min training sessions",
            "Full periodized programming",
            "Real-time form & technique coaching",
            "WhatsApp support between sessions",
            "Progress tracking & assessments",
        ],
        cta: "Get This Pack",
        highlight: true,
    },
];

const commitmentPlans = [
    {
        id: "quarterly",
        name: "Quarterly Plan",
        tag: "Recommended",
        price: "£240",
        period: "/ month",
        billedAs: "Billed as £720 every 3 months",
        perSession: "~£30 / session (2×/week)",
        savings: "Save 25% vs pay-as-you-go",
        description: "A full 12-week transformation block with complete coaching access and weekly accountability.",
        features: [
            "2 sessions per week (≈ 24 total)",
            "Fully periodized 12-week program",
            "Weekly check-in & progress review",
            "Real-time WhatsApp coaching",
            "Monthly program adjustments",
            "Movement & biomechanical assessments",
        ],
        cta: "Apply For Quarterly",
        highlight: true,
    },
    {
        id: "semi-annual",
        name: "Semi-Annual Plan",
        tag: "Best Value",
        price: "£200",
        period: "/ month",
        billedAs: "Billed as £1,200 every 6 months",
        perSession: "~£25 / session (2×/week)",
        savings: "Save 37% vs pay-as-you-go",
        description: "The ultimate commitment for deep, lasting transformation. Six months of relentless progress.",
        features: [
            "2 sessions per week (≈ 48 total)",
            "Fully periodized 24-week program",
            "Weekly check-in & progress review",
            "Priority WhatsApp access",
            "Bi-monthly full program resets",
            "Movement & biomechanical assessments",
            "Comprehensive performance testing",
        ],
        cta: "Apply For Semi-Annual",
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative z-10 w-full bg-onyx px-4 md:px-6 py-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-titanium uppercase mb-6 tracking-tighter">
                        Investment
                    </h2>
                    <div className="w-12 h-[2px] bg-gold mb-6" />
                    <p className="font-sans text-titanium/50 text-sm md:text-base max-w-xl uppercase tracking-widest leading-relaxed">
                        Choose the protocol that matches your ambition. Every plan is engineered for results.
                    </p>
                </div>

                {/* Session Packs */}
                <div className="w-full mb-4">
                    <span className="font-sans text-[10px] tracking-[0.4em] text-titanium/30 uppercase font-bold block mb-5">
                        Session Packs
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sessionPacks.map((plan, i) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative rounded-2xl p-8 border flex flex-col gap-6 transition-all duration-500 group overflow-hidden ${
                                    plan.highlight
                                        ? "bg-gold/10 border-gold/40 hover:border-gold/70"
                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                }`}
                            >
                                {plan.tag && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-gold text-onyx font-sans text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            {plan.tag}
                                        </span>
                                    </div>
                                )}

                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-gold/20 blur-[80px] rounded-full pointer-events-none" />
                                )}

                                <div className="relative z-10">
                                    <h3 className="font-display text-xl text-titanium uppercase tracking-tighter mb-2">{plan.name}</h3>
                                    <p className="font-sans text-titanium/50 text-xs tracking-wider leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-baseline gap-2">
                                        <span className={`font-display text-5xl tracking-tighter ${plan.highlight ? "text-gold" : "text-titanium"}`}>
                                            {plan.price}
                                        </span>
                                        <span className="font-sans text-titanium/40 text-xs uppercase tracking-wider">{plan.period}</span>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                                        <span className="font-sans text-titanium/50 text-[10px] uppercase tracking-widest">{plan.perSession}</span>
                                        {plan.savings && (
                                            <span className="font-sans text-gold text-[10px] uppercase tracking-widest font-bold">{plan.savings}</span>
                                        )}
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-3 relative z-10 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={12} className="text-gold mt-[3px] shrink-0" />
                                            <span className="font-sans text-titanium/70 text-xs leading-relaxed tracking-wider uppercase">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`relative z-10 w-full text-center font-sans text-xs uppercase tracking-widest font-bold py-4 transition-all duration-300 block ${
                                        plan.highlight
                                            ? "bg-gold text-onyx hover:bg-white"
                                            : "border border-white/20 text-titanium hover:border-gold hover:text-gold"
                                    }`}
                                >
                                    {plan.cta}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Commitment Plans */}
                <div className="w-full mt-10">
                    <span className="font-sans text-[10px] tracking-[0.4em] text-titanium/30 uppercase font-bold block mb-5">
                        Commitment Plans
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {commitmentPlans.map((plan, i) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative rounded-2xl p-8 md:p-10 border flex flex-col gap-6 transition-all duration-500 group overflow-hidden ${
                                    plan.highlight
                                        ? "bg-gold/10 border-gold/40 hover:border-gold/70"
                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                }`}
                            >
                                {plan.tag && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className={`font-sans text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                                            plan.tag === "Best Value"
                                                ? "bg-white/10 text-titanium border border-white/20"
                                                : "bg-gold text-onyx"
                                        }`}>
                                            {plan.tag}
                                        </span>
                                    </div>
                                )}

                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/15 blur-[100px] rounded-full pointer-events-none" />
                                )}

                                {/* Top content: name + price side by side on larger screens */}
                                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8">
                                    <div className="max-w-xs">
                                        <h3 className="font-display text-2xl text-titanium uppercase tracking-tighter mb-2">{plan.name}</h3>
                                        <p className="font-sans text-titanium/50 text-xs tracking-wider leading-relaxed">{plan.description}</p>
                                    </div>
                                    <div className="sm:text-right shrink-0">
                                        <div className="flex items-baseline gap-2 sm:justify-end">
                                            <span className={`font-display text-5xl tracking-tighter ${plan.highlight ? "text-gold" : "text-titanium"}`}>
                                                {plan.price}
                                            </span>
                                            <span className="font-sans text-titanium/40 text-sm uppercase tracking-wider">{plan.period}</span>
                                        </div>
                                        <p className="font-sans text-titanium/30 text-[10px] uppercase tracking-widest mt-1">{plan.billedAs}</p>
                                        <p className="font-sans text-titanium/50 text-[10px] uppercase tracking-widest mt-1">{plan.perSession}</p>
                                        <p className="font-sans text-gold text-[10px] uppercase tracking-widest font-bold mt-1">{plan.savings}</p>
                                    </div>
                                </div>

                                <div className="w-full h-[1px] bg-white/10 relative z-10" />

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 relative z-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={12} className="text-gold mt-[3px] shrink-0" />
                                            <span className="font-sans text-titanium/70 text-xs leading-relaxed tracking-wider uppercase">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`relative z-10 w-full text-center font-sans text-xs uppercase tracking-widest font-bold py-4 transition-all duration-300 block ${
                                        plan.highlight
                                            ? "bg-gold text-onyx hover:bg-white"
                                            : "border border-white/20 text-titanium hover:border-gold hover:text-gold"
                                    }`}
                                >
                                    {plan.cta}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footnote */}
                <p className="font-sans text-titanium/25 text-[10px] uppercase tracking-widest mt-12 text-center max-w-lg leading-relaxed">
                    All prices are for in-person training in Oxford, UK. Online coaching available globally. Book a free consultation to discuss your specific requirements.
                </p>

            </div>
        </section>
    );
}
