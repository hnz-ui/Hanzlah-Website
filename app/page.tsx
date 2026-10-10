import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import ServicesGrid from "@/components/ServicesGrid";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ToolsKit from "@/components/ToolsKit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <ServicesGrid />
        <About />
        <Experience />
        <ToolsKit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
