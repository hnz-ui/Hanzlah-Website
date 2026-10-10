import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Services — Product Marketing, Outbound, Web Development & Design | Hanzlah Malik",
  description:
    "Marketing and web services for B2B SaaS: product marketing and GTM, cold email and ABM outbound, React/Next.js website development, UI/UX design in Figma, and community-led growth.",
};

export default function ServicesIndex() {
  return (
    <>
      <Nav />
      <main className="pt-6">
        <ServicesGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
