import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import BookingSection from "@/components/sections/BookingSection";

export const metadata: Metadata = {
  title: "Book a Wedding Pet Concierge — Pawltier",
  description: "Book a verified pet sitter in 2 minutes. We call you back within 2 hours.",
};

export default function BookPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Book an Appointment"
        title="Book Your"
        highlight="Sitter"
        subtitle="Three quick steps. No payment upfront. We confirm your match within 2 hours."
      />
      <BookingSection hideHeader />
    </PageLayout>
  );
}
