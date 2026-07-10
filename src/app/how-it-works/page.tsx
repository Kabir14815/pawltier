import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import VideoEmbedSection from "@/components/sections/VideoEmbedSection";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { HOW_IT_WORKS_VIDEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works — Pawcort",
  description: "Book a wedding pet concierge in 4 simple steps. See how Pawcort works.",
};

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Simple Process"
        title="How Pawcort"
        highlight="Works"
        subtitle="From booking to celebration — we handle your pet's care so you can enjoy every moment."
      />
      <VideoEmbedSection video={HOW_IT_WORKS_VIDEO} layout="centered" bg="white" />
      <HowItWorks hideHeader />
      <WhyChooseUs />
    </PageLayout>
  );
}
