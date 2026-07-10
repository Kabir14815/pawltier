import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard — Pawcort",
  description: "Manage appointments and sitters",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
