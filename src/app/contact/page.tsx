import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — Pawltier",
  description: "Get in touch with Pawltier. Phone, email, WhatsApp, and contact form.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Get In Touch"
        title="Contact"
        highlight="Us"
        subtitle="Have questions or need a custom plan? We'd love to hear from you."
      />
      <ContactSection hideHeader />
    </PageLayout>
  );
}
