const fs = require('fs');
let content = fs.readFileSync('src/components/Disciplines.tsx', 'utf8');

// Update disciplines array to include dynamic comparative tables
content = content.replace(
    'fullDesc: "Master the sweet science from a professional fighter. Perfect your striking, head movement, and footwork while building elite-level cardiovascular conditioning and unbreakable mental toughness." }',
    'fullDesc: "Master the sweet science from a professional fighter. Perfect your striking, head movement, and footwork while building elite-level cardiovascular conditioning and unbreakable mental toughness.", table: [ { label: "Technique Coaching", standard: "Cardio Kickboxing", cj: "Pro-Fighter Mechanics" }, { label: "Footwork Drill", standard: "Generic Static", cj: "Dynamic Ring Movement" }, { label: "Cardio Impact", standard: "Sub-Optimal Pace", cj: "Lactate Threshold Focus" }, { label: "Primary Focus", standard: "Sweating", cj: "Technical Precision" } ] }'
);

content = content.replace(
    'fullDesc: "Dominate your next race. Functional fitness paired with endurance running to build an unbreakable engine, engineered specifically for the extreme physical demands of competitive Hyrox events." }',
    'fullDesc: "Dominate your next race. Functional fitness paired with endurance running to build an unbreakable engine, engineered specifically for the extreme physical demands of competitive Hyrox events.", table: [ { label: "Race Strategy", standard: "None / Wing It", cj: "Pacing & Station Tactics" }, { label: "Sled Mechanics", standard: "Inefficient Push/Pull", cj: "Optimized Leverage" }, { label: "Compromised Run", standard: "Ignored", cj: "Heavy Legs Conditioning" }, { label: "Primary Focus", standard: "General Fitness", cj: "Event Domination" } ] }'
);

content = content.replace(
    'fullDesc: "Build absolute power. Periodized programming focused on maximum output through heavy compound lifts. Increase your raw strength, muscular density, and overall foundational capacity." }',
    'fullDesc: "Build absolute power. Periodized programming focused on maximum output through heavy compound lifts. Increase your raw strength, muscular density, and overall foundational capacity.", table: [ { label: "Program Structure", standard: "Random Daily WODs", cj: "Elite Periodization" }, { label: "Progress Tracking", standard: "Guesswork", cj: "1RM & Volume Analytics" }, { label: "Lifting Form", standard: "Poor Mechanics", cj: "Biomechanical Safety" }, { label: "Primary Focus", standard: "Fatigue", cj: "Central Nervous System Power" } ] }'
);

content = content.replace(
    'fullDesc: "Expand your aerobic capacity and lactate threshold. High-intensity engine work designed to make you untiring, relentless, and capable of sustaining peak physical output for longer." }',
    'fullDesc: "Expand your aerobic capacity and lactate threshold. High-intensity engine work designed to make you untiring, relentless, and capable of sustaining peak physical output for longer.", table: [ { label: "Heart Rate Zones", standard: "Always Maximum (Zone 5)", cj: "Strategic Zone 2 to 5 Variation" }, { label: "Recovery Tracking", standard: "Ignored", cj: "HRV & Resting HR Data" }, { label: "Energy Systems", standard: "Glycolytic Only", cj: "Complete Aerobic Base" }, { label: "Primary Focus", standard: "Burn Calories", cj: "Limitless Engine" } ] }'
);

content = content.replace(
    'fullDesc: "Pedal with precision and purpose. Advanced cycling protocols to maximize power output, cadence efficiency, and endurance, whether you\\'re dominating the road or pushing limits indoors." }',
  'fullDesc: "Pedal with precision and purpose. Advanced cycling protocols to maximize power output, cadence efficiency, and endurance, whether you\\'re dominating the road or pushing limits indoors.", table: [ { label: "Power Tracking", standard: "RPE(Feelings)", cj: "FTP & Wattage Targets" }, { label: "Pedal Stroke", standard: "Quad Dominant", cj: "Full 360 Degree Efficiency" }, { label: "Programming", standard: "Generic Spin Class", cj: "Periodized Power Build" }, { label: "Primary Focus", standard: "Leg Burn", cj: "Sustained Wattage Output" } ] }'
);

content = content.replace(
    'fullDesc: "Develop pure explosive force. Jump higher, sprint faster, and react quicker through targeted stretch-shortening cycle training that turns your muscle fibers into loaded springs." }',
    'fullDesc: "Develop pure explosive force. Jump higher, sprint faster, and react quicker through targeted stretch-shortening cycle training that turns your muscle fibers into loaded springs.", table: [ { label: "Landing Mechanics", standard: "High Impact / Dangerous", cj: "Force Absorption Training" }, { label: "Ground Contact", standard: "Slow / Heavy", cj: "Minimal Ground Time" }, { label: "Volume Control", standard: "Endless Reps", cj: "CNS Preserving Dose" }, { label: "Primary Focus", standard: "Looking Cool", cj: "Raw Explosiveness" } ] }'
);

content = content.replace(
    'fullDesc: "Bulletproof your body. Pro-level prehab, mobility, and structural balance work to keep your joints healthy, correct imbalances, prevent setbacks, and keep you performing year-round." }',
    'fullDesc: "Bulletproof your body. Pro-level prehab, mobility, and structural balance work to keep your joints healthy, correct imbalances, prevent setbacks, and keep you performing year-round.", table: [ { label: "Approach", standard: "Reactionary (Wait for Pain)", cj: "Proactive Prehab" }, { label: "Mobility Work", standard: "Static Stretching Only", cj: "End-Range Isometrics" }, { label: "Imbalance Check", standard: "Ignored", cj: "Unilateral Strength Tests" }, { label: "Primary Focus", standard: "Rehab", cj: "Unbreakable Resilience" } ] }'
);

content = content.replace(
    'fullDesc: "Perform like a pro on game day. Sport-specific speed, agility, and power development tailored to the exact biomechanical demands of your chosen sport or competitive discipline." }',
    'fullDesc: "Perform like a pro on game day. Sport-specific speed, agility, and power development tailored to the exact biomechanical demands of your chosen sport or competitive discipline.", table: [ { label: "Drill Transfer", standard: "Gym Aesthetics", cj: "Direct Field/Court Transfer" }, { label: "Agility Focus", standard: "Cone Drills Only", cj: "Reactive & Chaos Agility" }, { label: "Speed Development", standard: "Treadmill Running", cj: "Acceleration Mechanics" }, { label: "Primary Focus", standard: "Looking Athletic", cj: "Dominating The Competition" } ] }'
);

// Lock scroll on open modal
content = content.replace(
    '        return () => ctx.revert();\n    }, []);',
    '        return () => ctx.revert();\n    }, []);\n\n    useEffect(() => {\n        if (selectedDiscipline) {\n            document.body.style.overflow = "hidden";\n        } else {\n            document.body.style.overflow = "unset";\n        }\n        return () => {\n            document.body.style.overflow = "unset";\n        };\n    }, [selectedDiscipline]);'
);

// Map the dynamic table instead of the static one and center the button
const staticTableRegex = /\{\[\s*\{\s*label:\s*"Methodology"[\s\S]*? Primary Focus[\s\S]*?\]\.map/m;
content = content.replace(staticTableRegex, '{selectedDiscipline.table.map');

// Modify the layout for the button to be centered and below the table
const buttonLayoutRegex = /<p className="font-sans text-\[10px\] text-titanium\/40 uppercase tracking-widest mt-4 text-center pb-2">[\s\S]*?<div className="mt-4 flex justify-end">/m;
content = content.replace(buttonLayoutRegex, `<div className="mt-10 flex flex-col items-center justify-center gap-6">\n                                    <a href="#contact" onClick={() => setSelectedDiscipline(null)} className="group relative overflow-hidden inline-flex items-center justify-center px-12 py-5 bg-gold text-onyx font-sans text-sm uppercase tracking-widest font-bold hover:text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-500 rounded-lg">\n                                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Secure Your Spot</span>\n                                        <div className="absolute inset-0 bg-onyx pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />\n                                    </a>\n                                    <p className="font-sans text-[10px] text-titanium/40 uppercase tracking-widest text-center">
                                        * Objective results demand objective science. We don't negotiate with mediocrity.
                                    </p>\n                                </div>\n\n                                <div className="hidden">`);

fs.writeFileSync('src/components/Disciplines.tsx', content);
console.log('Update complete.');
