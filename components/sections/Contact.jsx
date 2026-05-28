
"use client";

import { motion } from "framer-motion"; import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            id="contact"
            className="scroll-mt-28 relative w-full border-b border-dashed border-black/20 overflow-x-hidden"
        >
            <div className="pointer-events-none absolute inset-0">
                {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:22px_22px]" /> */}
                <div className="absolute -left-32 top-20 h-56 w-56 rounded-full bg-black/5 blur-3xl" />
                <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-black/5 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4 py-20">
                <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-7">
                        <span className="font-mono text-xs uppercase tracking-[0.35em] text-black/60">
                            Contact
                        </span>
                        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-black sm:text-5xl">
                            Let us build the next release together.
                        </h2>
                        <p className="text-sm leading-relaxed text-black/65">
                            Tell me about the product, the timeline, and the outcome you want. I can help
                            with UX direction, design systems, or shipping a production-ready frontend.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["UX Strategy", "Design Systems", "Frontend Build", "Launch Support"].map((chip) => (
                                <span
                                    key={chip}
                                    className="rounded-full border border-black/15 bg-white/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-black/65"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                        <div className="rounded-[24px] border border-black/15 bg-white/70 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50">
                                Availability
                            </p>
                            <p className="mt-3 text-lg font-semibold text-black">
                                Open for freelance and collaboration.
                            </p>
                            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-black/50">
                                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1">
                                    24h response
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1">
                                    Remote friendly
                                </span>
                            </div>
                            <div className="mt-6 flex items-center gap-3">
                                {[
                                    { icon: FaGithub, href: "https://github.com/Hermitxxx" },
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hermitdev/" },
                                    { icon: FaDiscord, href: "https://discord.com/users/901784245255671848" },
                                ].map((social, index) => (
                                    <a
                                        key={`contact-social-${index}`}
                                        href={social.href}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/80 text-black transition hover:-translate-y-0.5 hover:border-black/30 hover:bg-white"
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form className="relative overflow-hidden rounded-[28px] border border-black/15 bg-white/70 p-7 shadow-[0_30px_70px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -right-24 top-0 h-32 w-32 rounded-full bg-black/5 blur-2xl" />
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-2xl border border-black/15 bg-white/80 px-4 py-3 text-sm text-black outline-none transition focus:border-black/40 focus:bg-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@email.com"
                                    className="w-full rounded-2xl border border-black/15 bg-white/80 px-4 py-3 text-sm text-black outline-none transition focus:border-black/40 focus:bg-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                                    Project
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about the project"
                                    className="w-full resize-none rounded-2xl border border-black/15 bg-white/80 px-4 py-3 text-sm text-black outline-none transition focus:border-black/40 focus:bg-white"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.3em] text-black/50">
                                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-2 text-center">
                                    Scope
                                </span>
                                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-2 text-center">
                                    Timeline
                                </span>
                            </div>
                        </div>
                        <a
                            href="mailto:cvenom477@gmail.com"
                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-black/90"
                        >
                            Send Message
                        </a>
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
