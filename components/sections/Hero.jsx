'use client'
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

export function HeroBlock() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative z-10 flex items-center justify-center overflow-hidden bg-transparent min-h-screen w-full">
            {/* Animated background grid */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" /> */}

            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-6 inline-block"
                    >
                        <Image width={200} height={200} alt="logo" src='/alone.jpg' className="mx-auto h-24 w-24 rounded-full border-4 border-background bg-gradient-to-br from-primary to-muted shadow-lg" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-6 text-5xl font-bold text-foreground md:text-7xl"
                    >
                        Full Stack Developer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl"
                    >
                        Crafting beautiful, performant web applications with modern
                        technologies. Passionate about clean code and exceptional user
                        experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mb-12 flex flex-wrap justify-center gap-4"
                    >
                        <Button size="lg" className="gap-2 text-sm bg-black/90" onClick={() => scrollToSection('contact')}>
                            <Mail className="h-4 w-4" />
                            Get in Touch
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2 text-sm" onClick={() => scrollToSection('projects')}>
                            View Projects
                            <ArrowDown className="h-4 w-4" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex justify-center gap-4"
                    >
                        {[
                            { icon: FaGithub, href: "https://github.com/Hermitxxx" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/hermitdev/" },
                            { icon: FaDiscord, href: "https://discord.com/users/901784245255671848" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                                <social.icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 0.6 },
                    y: { delay: 1.5, duration: 1.5, repeat: Infinity },
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            >
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
        </section>
    );
}
