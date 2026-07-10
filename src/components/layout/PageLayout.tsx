import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InstagramButton from "@/components/ui/InstagramButton";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <InstagramButton />
    </>
  );
}
