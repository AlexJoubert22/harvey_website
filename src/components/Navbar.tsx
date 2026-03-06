"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Services", "Process", "Pricing"];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="fixed top-0 left-0 w-full z-50 bg-onyx/40 backdrop-blur-md border-b border-titanium/5 px-6 py-5 flex justify-between items-center"
            >
                {/* Left: Logo */}
                <div className="font-display font-bold text-2xl text-titanium uppercase tracking-tighter cursor-pointer hover:text-gold transition-colors duration-300 w-1/3">
                    CJ.
                </div>

                {/* Center: Main Links */}
                <div className="hidden md:flex gap-12 w-1/3 justify-center">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="font-sans text-xs tracking-[0.2em] text-titanium/80 uppercase hover:text-gold transition-all duration-300 relative group"
                        >
                            {link}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Right: Contact Button */}
                <div className="hidden md:flex w-1/3 justify-end">
                    <a
                        href="#contact"
                        className="font-sans text-xs tracking-[0.2em] text-onyx bg-gold uppercase px-6 py-2 hover:bg-white transition-colors duration-300 font-bold"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden flex flex-col justify-center items-end gap-[6px] cursor-pointer w-8 h-8 relative z-[60]"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    <span
                        className={`block h-[1px] bg-titanium transition-all duration-300 origin-center ${
                            mobileOpen ? "w-full rotate-45 translate-y-[7px]" : "w-full"
                        }`}
                    />
                    <span
                        className={`block h-[1px] bg-titanium transition-all duration-300 ${
                            mobileOpen ? "opacity-0 w-full" : "w-2/3"
                        }`}
                    />
                    <span
                        className={`block h-[1px] bg-titanium transition-all duration-300 origin-center ${
                            mobileOpen ? "w-full -rotate-45 -translate-y-[7px]" : "w-1/2"
                        }`}
                    />
                </button>
            </motion.nav>

            {/* Mobile Full-Screen Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-onyx/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-10 md:hidden"
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="font-display text-5xl tracking-tighter text-titanium uppercase hover:text-gold transition-colors duration-300"
                            >
                                {link}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + links.length * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="font-sans text-xs tracking-[0.2em] text-onyx bg-gold uppercase px-10 py-4 hover:bg-white transition-colors duration-300 font-bold mt-4"
                        >
                            Contact
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
