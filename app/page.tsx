import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
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
        <About />
        <ServicesGrid />
        <Experience />
        <ToolsKit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
