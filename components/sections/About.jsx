"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFigma,
    SiJsonwebtokens,
    SiVercel,
    SiGit,
} from "react-icons/si";
import { TbSparkles } from "react-icons/tb";

const ShadcnIcon = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M6 4h12" />
        <path d="M7.5 8.5h9" />
        <path d="M9 13h6" />
        <path d="M10.5 17.5h3" />
    </svg>
);

const techTabs = [
    {
        label: "Frontend",
        items: [
            { name: "React JS", icon: SiReact },
            { name: "Next JS", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "shadcn/ui", icon: ShadcnIcon },
        ],
    },
    {
        label: "Backend",
        items: [
            { name: "Node JS", icon: SiNodedotjs },
            { name: "Express JS", icon: SiExpress },
            { name: "JWT", icon: SiJsonwebtokens },
            { name: "Vercel", icon: SiVercel },
        ],
    },
    {
        label: "Database",
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "Git", icon: SiGit },
        ],
    },
    {
        label: "Design",
        items: [
            { name: "Figma", icon: SiFigma },
            { name: "Penpot", icon: TbSparkles },
        ],
    },
];

const About = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeStack = techTabs[activeTab];
    const tabsRef = useRef([]);
    const [indicator, setIndicator] = useState({ width: 0, left: 0 });

    useEffect(() => {
        const updateIndicator = () => {
            const activeEl = tabsRef.current[activeTab];

            if (!activeEl) {
                return;
            }

            setIndicator({
                width: activeEl.offsetWidth,
                left: activeEl.offsetLeft,
            });
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);

        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeTab]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            id="about"
            className="scroll-mt-28 relative w-full border-b border-dashed border-black/20"
        >
            <div className="pointer-events-none absolute inset-0">
                {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:22px_22px]" /> */}
            </div>

            <div className="container relative mx-auto px-4 py-20">
                <div className="flex flex-col gap-12">
                    <div className="max-w-3xl space-y-5">
                        <span className="font-mono text-xs uppercase tracking-[0.35em] text-black/60">
                            About
                        </span>
                        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-black sm:text-5xl">
                            Full-stack builder with a design-first mindset.
                        </h2>
                        <p className="text-sm leading-relaxed text-black/65">
                            I focus on building clean, modern web apps with thoughtful UX, strong visual
                            hierarchy, and a high-performance frontend. I enjoy taking ideas from concept to
                            polished product.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-[28px] border border-black/15 bg-white/70 p-7 shadow-[0_28px_70px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50">
                                        Journey
                                    </p>
                                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-black/40">
                                        In Progress
                                    </span>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative pl-6">
                                        <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-black" />
                                        <div className="space-y-1">
                                            <p className="text-lg font-semibold text-black">
                                                Programming Hero Level 01
                                            </p>
                                            <p className="text-sm text-black/60">Student ID: WEB13-1177</p>
                                            <p className="text-sm text-black/65">
                                                Full-stack foundations with rapid project shipping.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative pl-6">
                                        <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-black/40" />
                                        <div className="space-y-1">
                                            <p className="text-lg font-semibold text-black">
                                                HSC · South Point School and College
                                            </p>
                                            <p className="text-sm text-black/60">May 2025 - May 2026</p>
                                            <p className="text-sm text-black/65">
                                                Building academic momentum alongside product-focused practice.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-black/15 bg-white/70 p-7 shadow-[0_28px_70px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                            <div className="flex items-center justify-between">
                                <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50">
                                    Tech Stack
                                </p>
                                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-black/40">
                                    MERN
                                </span>
                            </div>

                            <div className="mt-5 sm:hidden">
                                <label className="sr-only" htmlFor="tech-stack-select">
                                    Select tech stack
                                </label>
                                <div className="relative">
                                    <select
                                        id="tech-stack-select"
                                        value={activeTab}
                                        onChange={(event) => setActiveTab(Number(event.target.value))}
                                        className="w-full appearance-none rounded-2xl border border-black/15 bg-white/80 px-4 py-3 pr-10 text-xs font-semibold uppercase tracking-[0.25em] text-black/70 shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition focus:border-black/30 focus:bg-white"
                                    >
                                        {techTabs.map((tab, index) => (
                                            <option key={tab.label} value={index}>
                                                {tab.label}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/50">
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="relative mt-5 hidden w-full items-center gap-2 rounded-full border border-black/10 bg-white/60 p-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 sm:inline-flex sm:text-xs">
                                <span
                                    aria-hidden
                                    className="absolute inset-y-1 left-1 rounded-full bg-black shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-[transform,width] duration-300"
                                    style={{
                                        width: indicator.width ? `${indicator.width}px` : undefined,
                                        transform: `translateX(${indicator.left}px)`,
                                        opacity: indicator.width ? 1 : 0,
                                    }}
                                />
                                {techTabs.map((tab, index) => (
                                    <button
                                        key={tab.label}
                                        type="button"
                                        onClick={() => setActiveTab(index)}
                                        ref={(node) => {
                                            tabsRef.current[index] = node;
                                        }}
                                        className={`relative z-10 whitespace-nowrap rounded-full px-3 py-2 transition-colors duration-200 ${index === activeTab ? "text-white" : "text-black/50 hover:text-black"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 space-y-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black/50">
                                    {activeStack.label} Development
                                </p>
                                <div
                                    key={activeStack.label}
                                    className="stack-swap grid grid-cols-2 gap-4 sm:grid-cols-4"
                                >
                                    {activeStack.items.map((item, index) => (
                                        <div
                                            key={item.name}
                                            className="float-card flex flex-col items-center gap-3 rounded-2xl border border-black/15 bg-white/80 px-3 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-black/70 shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-black/30"
                                            style={{ animationDelay: `${index * 0.18}s` }}
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-base text-black">
                                                <item.icon className="h-5 w-5" />
                                            </div>
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                    {activeStack.items.length === 1
                                        ? Array.from({ length: 3 }).map((_, fillerIndex) => (
                                            <div
                                                key={`filler-${activeStack.label}-${fillerIndex}`}
                                                className="rounded-2xl border border-black/10 bg-white/40"
                                            />
                                        ))
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
