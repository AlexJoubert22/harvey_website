"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transformations = [
    { id: 1, duration: "3-Month Transformation", name: "Marcus T.", result: "127 KG -> 87 KG", imgBefore: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop", imgAfter: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop" },
    { id: 2, duration: "6-Month Transformation", name: "Sarah L.", result: "28% -> 12% Body Fat", imgBefore: "https://images.unsplash.com/photo-1508215885820-4585e5610924?q=80&w=600&auto=format&fit=crop", imgAfter: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
    { id: 3, duration: "8-Week Prep", name: "David K.", result: "Hyrox Pro Qualifer", imgBefore: "https://images.unsplash.com/photo-1554284126-aaa88f2249c5?q=80&w=600&auto=format&fit=crop", imgAfter: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600&auto=format&fit=crop" }
];

const testimonials = [
    { id: 1, name: "Marcus T.", role: "Tech Entrepreneur", quote: "CJ doesn't just train your body; he rebuilds your mindset. The physical transformation was extreme, but the mental resilience I developed during the process is what truly changed my life.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=200&auto=format&fit=crop" },
    { id: 2, name: "Elena R.", role: "Hyrox Competitor", quote: "I was plateauing hard before working with CJ. His precision methodology shaved 12 minutes off my PB in just one block. The depth of his knowledge is matched only by his absolute refusal to let you quit.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop" },
    { id: 3, name: "James W.", role: "Pre-season Athlete", quote: "Returning from an ACL tear, I needed someone who understood performance, not just arbitrary sweating. We rebuilt the engine from scratch. I am faster and stronger now than before the injury.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&auto=format&fit=crop" },
    { id: 4, name: "Sofia M.", role: "Fashion Designer", quote: "The 24/7 tracking approach meant I couldn't slip up. The nutrition strategies were perfectly aligned with my chaotic schedule. The results speak for themselves. Simply the best.", img: "https://images.unsplash.com/photo-1508215885820-4585e5610924?q=80&w=200&auto=format&fit=crop" },
    { id: 5, name: "Lucas P.", role: "Amateur Boxer", quote: "We focused purely on explosive power and conditioning. The plyometric protocols were brutal but the translation to my sport was undeniable. Worth every single drop of sweat.", img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=200&auto=format&fit=crop" }
];

function BeforeAfterSlider({ imgBefore, imgAfter }: { imgBefore: string; imgAfter: string }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    return (
        <div
            ref={containerRef}
            className="w-full h-full relative overflow-hidden select-none touch-none round-2xl"
            onPointerDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
            }}
            onPointerMove={(e) => {
                if (isDragging) handleMove(e.clientX);
            }}
            onPointerUp={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <div className="absolute top-4 right-4 z-10 bg-gold/90 backdrop-blur-md px-3 py-1 rounded-full font-sans text-[10px] tracking-widest text-onyx uppercase font-bold shadow-lg">After</div>
                <img src={imgAfter} alt="After" className="w-full h-full object-cover pointer-events-none" />
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
                className="absolute inset-0 border-r-2 border-gold shadow-[2px_0_10px_rgba(0,0,0,0.5)]"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full font-sans text-[10px] tracking-widest text-titanium uppercase border border-white/10">Before</div>
                <img src={imgBefore} alt="Before" className="w-full h-full object-cover filter grayscale opacity-80 pointer-events-none" />
            </div>

            {/* Draggable Handle */}
            <div
                className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-xl border-2 border-onyx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6" /><path d="m15 18 6-6-6-6" /></svg>
                </div>
            </div>
        </div>
    );
}

export default function Transformations() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Auto-advance testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Track mobile breakpoint for responsive carousel offsets
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <section id="results" className="relative z-10 w-full bg-onyx py-32 overflow-hidden border-t border-white/5">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-titanium uppercase leading-tight tracking-tighter">
                    Witness the<br />transformations<br />of my <span className="text-gold italic">students.</span>
                </h2>
                <div className="flex flex-col gap-6">
                    <div className="w-12 h-[1px] bg-gold" />
                    <p className="font-sans text-titanium/50 text-sm md:text-base tracking-widest uppercase leading-relaxed max-w-md">
                        The changes each of our students goes through while achieving their personal goals are a powerful reflection of their physical and mental growth. Slide the image to reveal.
                    </p>
                </div>
            </div>

            {/* Static 3-Card Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {transformations.map((item) => (
                        <div key={item.id} className="w-full aspect-[3/4] flex flex-col relative bg-white/5 rounded-3xl p-4 border border-white/10 hover:border-gold/30 transition-colors duration-500">
                            {/* Interactive Slider Area */}
                            <div className="flex-1 w-full overflow-hidden mb-4 rounded-2xl relative cursor-default">
                                <BeforeAfterSlider imgBefore={item.imgBefore} imgAfter={item.imgAfter} />
                            </div>

                            <div className="flex flex-col px-2 pointer-events-none mt-2">
                                <span className="font-sans text-titanium/40 text-xs tracking-widest uppercase mb-2">{item.duration}</span>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-display text-lg lg:text-xl uppercase text-titanium tracking-tighter truncate mr-2">{item.name}</h3>
                                    <span className="font-sans text-gold text-xs lg:text-sm font-bold tracking-widest shrink-0">{item.result}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Coverflow Testimonials Sub-section */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex items-center gap-4 mb-6 justify-center">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="font-sans text-gold text-xs tracking-[0.2em] uppercase font-bold">Client Experiences</span>
                    <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-titanium uppercase leading-tight tracking-tighter text-center mb-16">
                    Real results, <span className="italic opacity-50 block">real stories.</span>
                </h3>

                {/* Mobile dot navigation */}
                <div className="flex justify-center gap-2 mb-8 md:hidden">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTestimonial(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeTestimonial ? "bg-gold w-6" : "bg-titanium/30"}`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Carousel Container */}
                <div className="relative w-full h-[400px] flex items-center justify-center -mb-8">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <AnimatePresence initial={false}>
                            {testimonials.map((testimonial, idx) => {
                                // Calculate distance from active index for circular infinite loop
                                const N = testimonials.length;
                                let distance = (idx - activeTestimonial) % N;
                                if (distance > Math.floor(N / 2)) distance -= N;
                                if (distance < -Math.floor(N / 2)) distance += N;

                                // On mobile push adjacent cards fully off-screen to avoid overlap
                                const adjacentOffset = isMobile ? (typeof window !== "undefined" ? window.innerWidth : 400) : 250;
                                const farOffset = isMobile ? (typeof window !== "undefined" ? window.innerWidth * 2 : 1000) : 500;

                                let xOffset = distance * adjacentOffset;
                                let scale = 1;
                                let opacity = 1;
                                let zIndex = 30;
                                let filter = "blur(0px)";

                                if (distance === 0) {
                                    scale = 1;
                                    opacity = 1;
                                    zIndex = 40;
                                    filter = "blur(0px)";
                                } else if (Math.abs(distance) === 1) {
                                    scale = isMobile ? 0.9 : 0.8;
                                    opacity = isMobile ? 0 : 0.4;
                                    zIndex = 20;
                                    filter = isMobile ? "blur(0px)" : "blur(4px)";
                                } else {
                                    scale = 0.6;
                                    opacity = 0;
                                    zIndex = 10;
                                    xOffset = distance > 0 ? farOffset : -farOffset;
                                }

                                return (
                                    <motion.div
                                        key={testimonial.id}
                                        className="absolute w-[90%] md:w-[600px] bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl"
                                        initial={false}
                                        animate={{
                                            x: xOffset,
                                            scale: scale,
                                            opacity: opacity,
                                            zIndex: zIndex,
                                            filter: filter
                                        }}
                                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                        style={{ pointerEvents: distance === 0 ? "auto" : "none" }}
                                    >
                                        <div className="absolute -top-6 -left-6 text-gold/20 text-8xl font-display pointer-events-none">"</div>
                                        <p className="font-sans text-titanium/80 text-base md:text-lg leading-relaxed italic mb-8 relative z-10 min-h-[100px]">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30 shrink-0">
                                                <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-sans text-titanium font-bold uppercase tracking-widest text-sm">{testimonial.name}</h4>
                                                <span className="font-sans text-titanium/40 text-[10px] md:text-xs uppercase tracking-widest">{testimonial.role}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
