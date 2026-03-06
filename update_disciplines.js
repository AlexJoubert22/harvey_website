const fs = require('fs');
let content = fs.readFileSync('src/components/Disciplines.tsx', 'utf8');

// 1. Replace lucide imports
content = content.replace(
    'import { Timer, Dumbbell, Flame, Bike, Zap, ShieldPlus, X } from "lucide-react";',
    'import { Timer, Dumbbell, Flame, Bike, Zap, ShieldPlus, Swords, Award, X, Check, Minus } from "lucide-react";'
);

// 2. Remove Custom SVGs
content = content.replace(/(\/\/ Custom Minimalist SVG Icons[\s\S]*?gsap\.registerPlugin)/, 'gsap.registerPlugin');

// 3. Update disciplines array
content = content.replace('icon: BoxingGloveIcon', 'icon: Swords');
content = content.replace('icon: TrophyWreathIcon', 'icon: Award');

// 4. Update the Modal content
const newModalContent = `{/* Interactive Detail Modal Expanded */}
            <AnimatePresence>
                {selectedDiscipline && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-onyx/90 backdrop-blur-xl overflow-y-auto"
                        onClick={() => setSelectedDiscipline(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl bg-[#030303] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-14 overflow-hidden shadow-2xl my-auto"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                boxShadow: \`0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px -15px \${selectedDiscipline.color}20\`
                            }}
                        >
                            {/* Modal Background Glow */}
                            <div
                                className="absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full opacity-10 pointer-events-none"
                                style={{ backgroundColor: selectedDiscipline.color }}
                            />

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedDiscipline(null)}
                                className="absolute top-4 right-4 md:top-8 md:right-8 text-titanium/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full backdrop-blur-sm z-20"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>

                            {/* Content */}
                            <div className="relative z-10 w-full flex flex-col gap-10">
                                {/* Header Section */}
                                <div>
                                    <div className="flex items-center gap-6 mb-8">
                                        <div
                                            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0"
                                            style={{ color: selectedDiscipline.color }}
                                        >
                                            <selectedDiscipline.icon size={48} strokeWidth={0.5} style={{ filter: \`drop-shadow(0px 0px 15px \${selectedDiscipline.color}60)\` }} />
                                        </div>
                                        <div>
                                            <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] font-bold uppercase block mb-2" style={{ color: selectedDiscipline.color }}>
                                                Specialized Protocol / 0{selectedDiscipline.id}
                                            </span>
                                            <h3 className="font-display text-4xl md:text-6xl text-titanium uppercase tracking-tighter leading-none">
                                                {selectedDiscipline.name}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <p className="font-sans text-titanium/80 text-lg md:text-xl leading-relaxed tracking-wide font-light max-w-2xl">
                                        {selectedDiscipline.fullDesc}
                                    </p>
                                </div>

                                <div className="w-full h-[1px] bg-white/10" />

                                {/* Comparative Section */}
                                <div className="w-full">
                                    <h4 className="font-display text-2xl text-titanium uppercase tracking-tighter mb-6">
                                        The <span className="text-gold italic">Advantage</span>
                                    </h4>
                                    
                                    <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-black/50">
                                        <div className="grid grid-cols-3 border-b border-white/10 bg-white/5 py-3 px-4 md:px-6">
                                            <div className="col-span-1 font-sans text-[10px] uppercase tracking-widest text-titanium/50">Metric</div>
                                            <div className="col-span-1 font-sans text-[10px] uppercase tracking-widest text-titanium/50 text-center">Industry Standard</div>
                                            <div className="col-span-1 font-sans text-[10px] uppercase tracking-widest text-gold text-center font-bold">The CJ Standard</div>
                                        </div>
                                        
                                        {[
                                            { label: "Methodology", standard: "Generic Templates", cj: "Elite Periodization" },
                                            { label: "Data Tracking", standard: "Guesswork & 'Feelings'", cj: "Objective Analytics" },
                                            { label: "Support Access", standard: "Hourly Sessions", cj: "24/7 Priority Access" },
                                            { label: "Primary Focus", standard: "Fatigue & Sweating", cj: "Measurable Progression" }
                                        ].map((row, idx) => (
                                            <div key={idx} className="grid grid-cols-3 border-b border-white/5 last:border-0 py-4 px-4 md:px-6 items-center hover:bg-white/5 transition-colors">
                                                <div className="col-span-1 font-sans text-xs uppercase tracking-wider text-titanium/80">{row.label}</div>
                                                <div className="col-span-1 flex items-center justify-center gap-2 font-sans text-xs md:text-sm text-titanium/40">
                                                    <Minus size={14} className="text-red-500/50" />
                                                    <span className="hidden md:inline">{row.standard}</span>
                                                </div>
                                                <div className="col-span-1 flex items-center justify-center gap-2 font-sans text-xs md:text-sm text-titanium">
                                                    <Check size={14} className="text-gold" />
                                                    <span className="hidden md:inline font-bold">{row.cj}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="font-sans text-[10px] text-titanium/40 uppercase tracking-widest mt-4 text-center pb-2">
                                        * Objective results demand objective science. We don't negotiate with mediocrity.
                                    </p>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <a href="#contact" onClick={() => setSelectedDiscipline(null)} className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 bg-gold text-onyx font-sans text-sm uppercase tracking-widest font-bold hover:text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-500 rounded-lg">
                                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Secure Your Spot</span>
                                        <div className="absolute inset-0 bg-onyx pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>`;

const modalRegex = /\{\/\* Interactive Detail Modal \*\/\}[\s\S]*?<\/AnimatePresence>/;
content = content.replace(modalRegex, newModalContent);

fs.writeFileSync('src/components/Disciplines.tsx', content);
console.log('Update complete.');
