import type { Metadata, Viewport } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pawcort — Wedding Pet Concierge | Atlanta, Georgia",
  description:
    "Include your pet in your wedding day without the stress. Pawcort provides verified wedding pet concierges across Atlanta, Georgia — ceremony to reception.",
  keywords:
    "wedding pet concierge, pet at wedding, wedding pet sitter, ceremony pet care, dog at wedding, Atlanta Georgia",
  metadataBase: new URL("https://pawcort.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Pawcort — Wedding Pet Concierge",
    description:
      "Your pet belongs in your wedding story. Loved, included, and celebrated — we handle the rest.",
    type: "website",
    locale: "en_US",
    url: "https://pawcort.com",
    siteName: "Pawcort",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawcort",
    description: "Loved. Included. Celebrated — on your wedding day.",
    images: ["/favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
