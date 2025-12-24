"use client";
import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
    return (
        <section className="relative w-full pt-48 pb-24 px-6 overflow-hidden bg-black">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff541f]/10 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#ffd700]/5 rounded-full blur-[100px] translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ff541f]" />
                        <span className="text-xs font-bold text-white/60 tracking-widest uppercase">
                            Premium Solutions
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8"
                    >
                        Elevating Business <br />
                        Through{" "}
                        <span className="text-[#ff541f]">
                            Digital Excellence
                        </span>
                        .
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl text-white/40 text-xl leading-relaxed font-light"
                    >
                        From AI-driven voice agents to high-performance web
                        experiences, we provide the tools you need to scale and
                        dominate your market.
                    </motion.p>
                </div>
            </div>

            {/* Subtle bottom gradient */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default ServicesHero;
