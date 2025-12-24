"use client";
import React from "react";
import Button from "./button";
import FluidHeader from "./FluidHeader";
import GlassOrchestra from "./GlassOrchestra";
import CountUp from "./countup";
import { motion } from "motion/react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 pt-32 pb-20 overflow-hidden"
        >
            <GlassOrchestra />

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side: Text Content */}
                <div className="flex-1 text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <span className="flex size-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-white/60 tracking-wider">
                            SCALABLE AI SOLUTIONS
                        </span>
                    </motion.div>

                    <FluidHeader
                        text="Automate Your Business with Intelligent Automation"
                        className="mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-white/60 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed font-light"
                    >
                        At Syenxa Tech, we provide smart, scalable AI Calling
                        Agents and automation solutions designed to enhance
                        sales, improve customer support, and optimize business
                        operations. Our AI technology works around the clock,
                        helping businesses worldwide convert more leads,
                        reduce costs, and grow faster.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap gap-6"
                    >
                        <Button text="Explore Services" variant="primary" />
                        <Button text="Book a Demo" variant="secondary" />
                    </motion.div>
                </div>

                {/* Right Side: Visual Element / Social Proof */}
                <div className="flex-1 relative w-full lg:w-auto h-[400px] lg:h-[600px] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Featured Achievment Cards */}
                        <div className="absolute top-10 right-0 lg:-right-4 p-6 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500">
                            <Achievement title="Happy Clients" value={150} />
                        </div>

                        <div className="absolute bottom-20 left-0 lg:-left-4 p-6 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500">
                            <Achievement
                                title="AI Conversations"
                                value={120}
                                label="k"
                            />
                        </div>

                        {/* Central Visual Blur/Glow */}
                        <div className="size-64 bg-[#ff541f]/20 blur-[80px] rounded-full animate-pulse" />

                        {/* Client avatars stack */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center -space-x-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.img
                                    key={i}
                                    whileHover={{ y: -10, zIndex: 10 }}
                                    src={`/hero-r-${i}.png`}
                                    alt={`Client ${i}`}
                                    className="size-16 rounded-full border-2 border-white/20 shadow-xl object-cover cursor-pointer bg-zinc-900"
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Row: Additional Social Proof / Logos if needed */}
        </section>
    );
};

const Achievement = ({ title, value, label = "+" }) => {
    return (
        <div className="flex flex-col gap-1 items-start min-w-[120px]">
            <span className="text-white/40 text-xs font-medium uppercase tracking-widest">
                {title}
            </span>
            <div className="flex items-baseline gap-1">
                <CountUp
                    from={0}
                    to={value}
                    duration={2}
                    className="text-4xl font-bold text-white tracking-tighter"
                />
                <span className="text-2xl font-light text-[#ff541f]">
                    {label}
                </span>
            </div>
        </div>
    );
};

export default Hero;
