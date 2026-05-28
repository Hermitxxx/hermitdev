"use client";

import Image from "next/image";
import React from "react";
import designs from "@/public/project-pics/designsmd.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
    const tagline = project.tagline ?? [];
    const previewImage = project.image ?? designs;

    return (
        <motion.article
            key={project.id}
            data-project-card
            whileHover={{ y: -6, rotate: -0.3 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative overflow-hidden rounded-[28px] border border-black/15 bg-white/70 text-black backdrop-blur-2xl"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:14px_14px]" />
                <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-black/8 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-white/10" />
            </div>

            <div className="relative z-10 flex flex-col gap-6 p-7 sm:p-8">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-black/70">
                    <span className="rounded-full border border-black/20 bg-white/80 px-3 py-1">IFM</span>
                    <span>{project.year}</span>
                </div>

                <div className="space-y-3">
                    <h3 className="text-3xl font-semibold leading-tight tracking-[-0.02em]">
                        {project.title}
                    </h3>
                    <p className="font-mono text-lg leading-tight tracking-[0.1em] text-black/80">
                        {tagline.map((line, index) => (
                            <React.Fragment key={`${project.id}-tagline-${index}`}>
                                {line}
                                {index < tagline.length - 1 ? <br /> : null}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <p className="text-sm leading-relaxed text-black/65">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-black/15 bg-white/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-black/65"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="relative h-64 overflow-hidden rounded-2xl border border-black/15 bg-white/70">
                    <Image
                        src={previewImage}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-black/70">
                    <span>READY TO EXECUTE _</span>
                    <span className="text-black/50">v1.0</span>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/80 px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-black/40 hover:bg-white"
                    >
                        <FaGithub className="h-4 w-4" />
                        GitHub Repo
                    </a>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-black/90"
                    >
                        Live Demo
                        <FiExternalLink className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;