import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content";
import ServicePage from "@/components/ServicePage";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
