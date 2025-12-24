"use client";
import React from "react";
import { motion } from "framer-motion";

const ProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            description:
                "We dive deep into your business needs to define the perfect AI or digital strategy for your goals.",
        },
        {
            number: "02",
            title: "Design & Development",
            description:
                "Our experts craft high-end user experiences and integrate cutting-edge AI technologies into your workflow.",
        },
        {
            number: "03",
            title: "Optimization & Launch",
            description:
                "We rigorously test and optimize every aspect to ensure a flawless launch and immediate impact.",
        },
    ];

    return (
        <section className="w-full py-24 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    size: "40px 40px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#ff541f] text-sm font-bold tracking-[0.2em] uppercase block mb-4"
                    >
                        Our Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-6xl font-bold text-white tracking-tighter"
                    >
                        How We Bring{" "}
                        <span className="text-[#ff541f]">Vision</span> to Life.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="relative p-12 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-[#ff541f]/20 transition-colors group"
                        >
                            <span className="text-8xl font-bold text-white/5 absolute -top-4 -right-4 select-none group-hover:text-[#ff541f]/10 transition-colors">
                                {step.number}
                            </span>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
