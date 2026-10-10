import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Statement from "@/components/Statement";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Skills from "@/components/Skills";
import ToolsKit from "@/components/ToolsKit";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Statement />
        <About />
        <WhatIDo />
        <Skills />
        <ToolsKit />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
