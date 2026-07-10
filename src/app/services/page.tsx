import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import PricingSection from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Services & Pricing — Pawcort",
  description: "Wedding pet sitting, event care, overnight stays, and more. Transparent pricing for every occasion.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        badge="What We Offer"
        title="Our"
        highlight="Services"
        subtitle="From weddings to overnight stays — trusted pet care for every occasion across India."
      />
      <Services hideHeader />
      <PricingSection />
    </PageLayout>
  );
}
