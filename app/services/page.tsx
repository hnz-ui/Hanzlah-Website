import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Services: Product Marketing, Research, LinkedIn Ads, Outbound & Web | Hanzlah Malik",
  description:
    "What I do for B2B and B2C products: product marketing and GTM, market research, LinkedIn ads, cold email and ABM outbound, content and social, React websites, product design support, and community-led growth.",
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
