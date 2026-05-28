import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { HeroBlock } from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBlock></HeroBlock>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </>
  );
}
