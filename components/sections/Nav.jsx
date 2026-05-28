'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

function TeaIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 text-amber-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 8.5h11.2v5.1a5.6 5.6 0 0 1-5.6 5.6H10a5.5 5.5 0 0 1-5.5-5.5V8.5Z" />
            <path d="M15.7 9.7h1.7a2.6 2.6 0 0 1 0 5.2h-1.7" />
            <path d="M7.2 5.2c.6.5.6 1.3 0 1.8M10 4.7c.7.6.7 1.7 0 2.3M12.8 5.1c.6.5.6 1.4 0 1.9" />
        </svg>
    );
}

function SignInIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10 17l5-5-5-5" />
            <path d="M15 12H4" />
            <path d="M20 4v16" />
        </svg>
    );
}

function SparklesIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m13 3-1.4 4.2a2 2 0 0 1-1.3 1.3L6 10l4.3 1.5a2 2 0 0 1 1.3 1.3L13 17l1.4-4.2a2 2 0 0 1 1.3-1.3L20 10l-4.3-1.5a2 2 0 0 1-1.3-1.3L13 3Z" />
            <path d="m5 14-.7 2.1a1 1 0 0 1-.6.6L2 17.4l1.7.6a1 1 0 0 1 .6.6L5 20l.7-1.4a1 1 0 0 1 .6-.6l1.7-.6-1.7-.6a1 1 0 0 1-.6-.6L5 14Z" />
        </svg>
    );
}

function MenuIcon({ open }) {
    return open ? (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
        </svg>
    ) : (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
        </svg>
    );
}

const Nav = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const updateScrollState = () => {
            const nextValue = window.scrollY > 16
            setIsScrolled((currentValue) =>
                currentValue === nextValue ? currentValue : nextValue
            );
        };

        let frameId = 0;

        const handleScroll = () => {
            cancelAnimationFrame(frameId)
            frameId = requestAnimationFrame(updateScrollState)
        };

        updateScrollState();
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateHash = () => {
            setActiveHash(window.location.hash || "#home");
        };

        updateHash();
        window.addEventListener("hashchange", updateHash);

        return () => window.removeEventListener("hashchange", updateHash);
    }, []);

    useEffect(() => {
        const sectionIds = navigationItems
            .map((item) => item.href)
            .filter((href) => href.startsWith("#"))
            .map((href) => href.replace("#", ""));
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length > 0) {
                    const nextId = visible[0].target.id;
                    setActiveHash(`#${nextId}`);
                }
            },
            { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const isActive = (href) => {
        if (href.startsWith("#")) {
            return activeHash === href;
        }

        return href === "/" ? pathname === href : pathname.startsWith(href);
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        window.location.hash = href;
    };

    const shellClassName = [
        "mx-auto w-full border",
        "transition-all duration-500 ease-out",
        isScrolled
            ? "border-border/40 bg-background/80 rounded-2xl backdrop-blur-sm"
            : "border-transparent bg-transparent shadow-none",
    ].join(" ");


    return (
        <header className="fixed inset-x-0 top-0 z-100 px-3 pt-3 sm:px-4 text-black overflow-x-hidden">
            <nav aria-label="Primary" className="mx-auto max-w-6xl">
                <div
                    className={[
                        "transition-transform duration-500 ease-out",
                        isScrolled ? "translate-y-0" : "-translate-y-2",
                    ].join(" ")}
                >
                    <div className={shellClassName}>
                        <div className="flex items-center gap-3 rounded-full px-4 py-3.5 sm:px-6">
                            <Link
                                href="/"
                                className="flex items-center gap-3 text-zinc-950 transition-transform duration-300 hover:-translate-y-0.5 dark:text-zinc-50"
                                aria-label="Cha Bondhu home"
                            >
                                <span className="text-lg font-semibold tracking-tight sm:text-xl">
                                    HERMIT.dev
                                </span>
                            </Link>

                            <div className="hidden flex-1 items-center justify-center lg:flex">
                                <ul className="flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    {navigationItems.map((item) => {
                                        const active = isActive(item.href);

                                        return (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    scroll={false}
                                                    aria-current={active ? "page" : undefined}
                                                    onClick={(e) => handleNavClick(e, item.href)}
                                                    className={[
                                                        "relative py-2 transition-colors duration-200 hover:text-zinc-950 dark:hover:text-zinc-50",
                                                        active ? "text-zinc-950 dark:text-zinc-50" : "",
                                                        "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-black after:transition-transform after:duration-200 hover:after:scale-x-100",
                                                        active ? "after:scale-x-100" : "",
                                                    ]
                                                        .filter(Boolean)
                                                        .join(" ")}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="ml-auto hidden items-center gap-3 lg:flex">
                                <a
                                    href="https://drive.google.com/file/d/1ECvIQsuv4QKnv_7C7P8sV0CDfLiUJbWA/view?pli=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600"
                                >
                                    <SparklesIcon />
                                    Download Resume
                                </a>
                            </div>

                            <button
                                type="button"
                                className="ml-auto inline-flex items-center justify-center rounded-full border border-zinc-950/15 bg-white/70 p-3 text-zinc-950 transition-all duration-200 hover:bg-white lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-zinc-50 dark:hover:bg-white/10"
                                aria-expanded={isMenuOpen}
                                aria-controls="primary-navigation-mobile"
                                onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
                            >
                                <MenuIcon open={isMenuOpen} />
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>

                        <div
                            id="primary-navigation-mobile"
                            className={[
                                "backdrop-blur-2xl rounded-xl lg:hidden",
                                "transition-all duration-300 ease-out",
                                "overflow-x-hidden",
                                isMenuOpen
                                    ? "max-h-96 px-4 pb-4 pt-3 opacity-100"
                                    : "max-h-0 px-4 py-0 opacity-0",
                            ].join(" ")}
                        >
                            <div className="grid gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                {navigationItems.map((item) => {
                                    const active = isActive(item.href);

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            scroll={false}
                                            aria-current={active ? "page" : undefined}
                                            onClick={(e) => {
                                                handleNavClick(e, item.href);
                                                setIsMenuOpen(false);
                                            }}
                                            className={[
                                                "rounded-2xl px-4 py-3 transition-colors duration-200",
                                                active
                                                    ? "bg-amber-500/10 text-zinc-950 dark:text-zinc-50"
                                                    : "hover:bg-zinc-950/5 hover:text-zinc-950 dark:hover:bg-white/5 dark:hover:text-zinc-50",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}

                                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                                    <a
                                        href="https://drive.google.com/file/d/1ECvIQsuv4QKnv_7C7P8sV0CDfLiUJbWA/view?pli=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition-all duration-200 hover:bg-amber-600"
                                    >
                                        <SparklesIcon />
                                        Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;