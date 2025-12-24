"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    MessageSquare,
    Globe,
    Smartphone,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const ServiceList = () => {
    const services = [
        {
            title: "AI Calling Agents",
            subtitle: "Revolutionize Your Outreach",
            description:
                "Automate your outbound and inbound calls with human-like AI voice agents. Perfect for appointment setting, lead qualification, and customer support.",
            features: [
                "24/7 Availability",
                "Natural Language Processing",
                "Seamless CRM Integration",
                "Scalable Performance",
            ],
            icon: Cpu,
            href: "/ai-calling-agents",
            color: "#ff541f",
        },
        {
            title: "AI Chatbots",
            subtitle: "Intelligent Conversations",
            description:
                "Deploy smart chatbots that understand and respond to customer queries instantly. Drive engagement and capture leads while you sleep.",
            features: [
                "Multi-platform Support",
                "Real-time Data Sync",
                "Advanced Personalization",
                "Automated Workflows",
            ],
            icon: MessageSquare,
            href: "/ai-chatbots",
            color: "#ff541f",
        },
        {
            title: "Website Development",
            subtitle: "High-Performance Digital Presence",
            description:
                "We build fast, secure, and SEO-optimized websites that convert. Tailored designs that reflect your brand's unique identity.",
            features: [
                "Custom UX/UI Design",
                "Responsive Layouts",
                "Next.js & React Expertise",
                "Optimized Performance",
            ],
            icon: Globe,
            href: "/website-development",
            color: "#ffd700",
        },
        {
            title: "Mobile App Development",
            subtitle: "Premium Mobile Experiences",
            description:
                "Scale your business with custom iOS and Android applications. We focus on scalability, security, and exceptional user experience.",
            features: [
                "Cross-platform Solutions",
                "Native Performance",
                "Intuitive Interfaces",
                "Regular Maintenance",
            ],
            icon: Smartphone,
            href: "/digital-marketing",
            color: "#ffd700",
        },
    ];

    return (
        <section className="w-full py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-24">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={`flex flex-col ${
                                idx % 2 === 0
                                    ? "lg:flex-row"
                                    : "lg:flex-row-reverse"
                            } gap-12 lg:gap-24 items-center`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-[#ff541f]">
                                        <service.icon className="w-6 h-6" />
                                        <span className="uppercase tracking-[0.2em] text-xs font-bold">
                                            {service.subtitle}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                                        {service.title}
                                    </h2>
                                    <p className="text-white/40 text-lg leading-relaxed font-light max-w-xl">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, fIdx) => (
                                        <div
                                            key={fIdx}
                                            className="flex items-center gap-2 text-white/60"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-[#ff541f]" />
                                            <span className="text-sm">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform group"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Visual Side */}
                            <div className="flex-1 w-full max-w-2xl">
                                <div className="relative aspect-square rounded-[3rem] bg-zinc-950/50 border border-white/5 overflow-hidden group">
                                    {/* Abstract Visual Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div
                                            className="w-48 h-48 rounded-full blur-[80px] opacity-20 animate-pulse"
                                            style={{
                                                backgroundColor: service.color,
                                            }}
                                        />
                                        <service.icon
                                            className="w-32 h-32 text-white/10 group-hover:text-[#ff541f]/20 transition-colors duration-700 hover:scale-110"
                                            strokeWidth={1}
                                        />
                                    </div>

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceList;
