import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ToolsWheel from "@/components/ToolsWheel";
import ToolsMarquee from "@/components/ToolsMarquee";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ServicesGrid />
        <Experience />
        <Section id="tools" chip="Toolbox" gray="Every Tool" white="I Run">
          <ToolsWheel />
          <ToolsMarquee />
        </Section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
