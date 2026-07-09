import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import VideoEmbedSection from "@/components/sections/VideoEmbedSection";
import Testimonials from "@/components/sections/Testimonials";
import { REVIEWS_VIDEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews — Pawltier",
  description: "Read real stories from 500+ couples who trusted Pawltier to include their pets in their wedding day.",
};

export default function ReviewsPage() {
  return (
    <PageLayout>
      <PageHero
        badge="What Pet Parents Say"
        title="Loved by"
        highlight="500+ Families"
        subtitle="Real stories from pet parents who trusted us on their most important days."
      />
      <VideoEmbedSection video={REVIEWS_VIDEO} layout="split" bg="cream" />
      <Testimonials hideHeader />
    </PageLayout>
  );
}
