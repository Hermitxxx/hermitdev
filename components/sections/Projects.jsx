"use client";

import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import { projects as projectData } from "@/data/projects";

const Projects = () => {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState(null);
    const scrollerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [page, setPage] = useState(1);

    const pageCount = useMemo(() => Math.max(1, Math.ceil(items.length / 2)), [items.length]);

    useEffect(() => {
        let isActive = true;

        const loadProjects = async () => {
            try {
                setStatus("loading");
                setError(null);

                const data = projectData;

                if (!Array.isArray(data)) {
                    throw new Error("Invalid projects data");
                }

                if (isActive) {
                    setItems(data);
                    setStatus("success");
                }
            } catch (err) {
                if (isActive) {
                    setError(err instanceof Error ? err.message : "Failed to load projects");
                    setStatus("error");
                }
            }
        };

        loadProjects();

        return () => {
            isActive = false;
        };
    }, []);

    useEffect(() => {
        const scroller = scrollerRef.current;

        if (!scroller) {
            return undefined;
        }

        const updateScrollState = () => {
            const { scrollLeft, scrollWidth, clientWidth } = scroller;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);

            const nextPage = Math.min(
                pageCount,
                Math.max(1, Math.round(scrollLeft / clientWidth) + 1),
            );
            setPage(nextPage);
        };

        updateScrollState();
        scroller.addEventListener("scroll", updateScrollState, { passive: true });
        window.addEventListener("resize", updateScrollState);

        return () => {
            scroller.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
    }, [pageCount, status]);

    const scrollByPage = (direction) => {
        const scroller = scrollerRef.current;

        if (!scroller) {
            return;
        }

        if (direction < 0 && !canScrollLeft) {
            return;
        }

        if (direction > 0 && !canScrollRight) {
            return;
        }

        scroller.scrollBy({ left: direction * scroller.clientWidth, behavior: "smooth" });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            id="projects"
            className="scrollbar-none w-full mt-16 min-h-screen overflow-x-hidden border-t border-b border-dashed border-black/20"
        >
            <div className="container mx-auto px-4 pt-16">
                <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.35em] text-black/60">
                        Selected Work
                    </span>
                    <h2 className="text-4xl font-semibold tracking-[-0.02em] text-black sm:text-5xl">
                        Projects that blend design and engineering.
                    </h2>
                    <p className="max-w-2xl text-sm text-black/60">
                        A focused set of experiments, products, and systems built for clarity, speed, and polish.
                    </p>
                </div>
            </div>

            {status === "error" ? (
                <div className="container mx-auto px-4 py-12">
                    <div className="rounded-2xl border border-black/15 bg-white/70 p-6 text-sm text-black/70">
                        {error || "Something went wrong loading projects."}
                    </div>
                </div>
            ) : null}

            {status === "loading" ? (
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center gap-6 pb-8 text-xs uppercase tracking-[0.4em] text-black/50">
                        <span>01</span>
                        <div className="h-px flex-1 bg-black/10">
                            <div className="h-px w-1/5 bg-black/60" />
                        </div>
                        <span>--</span>
                    </div>
                    <div className="flex gap-8 overflow-hidden">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div
                                key={`project-skeleton-${index}`}
                                className="h-[520px] w-full flex-none rounded-[28px] border border-black/15 bg-white/60 shadow-[0_30px_70px_rgba(0,0,0,0.12)] md:w-[calc(50%-1rem)]"
                            >
                                <div className="h-full animate-pulse rounded-[28px] bg-[linear-gradient(110deg,#f4f4f4,45%,#eaeaea,55%,#f4f4f4)] bg-[length:200%_100%]" />
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}

            {status === "success" ? (
                <div className="container mx-auto px-4 py-12">
                    {items.length === 0 ? (
                        <div className="rounded-2xl border border-black/15 bg-white/70 p-6 text-sm text-black/70">
                            No projects yet. Add your first one to get started.
                        </div>
                    ) : (
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.4em] text-black/50">
                                <span>{String(page).padStart(2, "0")}</span>
                                <div className="relative h-px flex-1 bg-black/10">
                                    <div
                                        className="absolute left-0 top-0 h-px bg-black/60 transition-all duration-300"
                                        style={{ width: `${(page / pageCount) * 100}%` }}
                                    />
                                </div>
                                <span>{String(pageCount).padStart(2, "0")}</span>
                                <div className="ml-auto flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => scrollByPage(-1)}
                                        aria-label="Scroll projects left"
                                        aria-disabled={!canScrollLeft}
                                        className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white/80 text-black shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:border-black/30 hover:bg-white aria-disabled:cursor-not-allowed aria-disabled:opacity-40"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            className="h-5 w-5 transition group-hover:-translate-x-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => scrollByPage(1)}
                                        aria-label="Scroll projects right"
                                        aria-disabled={!canScrollRight}
                                        className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-black text-white shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-black/90 aria-disabled:cursor-not-allowed aria-disabled:opacity-40"
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            className="h-5 w-5 transition group-hover:translate-x-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div
                                ref={scrollerRef}
                                className="scrollbar-none flex snap-x snap-mandatory gap-8 overflow-x-hidden pt-6 pb-6 pr-4 scroll-smooth"
                            >
                                {items.map((project) => (
                                    <div
                                        key={project.id}
                                        className="w-full flex-none snap-start md:w-[calc(50%-1rem)]"
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : null}
        </motion.section>
    );
};

export default Projects;