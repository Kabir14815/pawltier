import LoadingScreen from "@/components/ui/LoadingScreen";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import PromisesSection from "@/components/sections/PromisesSection";
import HomeStorySection from "@/components/sections/HomeStorySection";
import HomePreview from "@/components/sections/HomePreview";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <PageLayout>
        <HeroSection />
        <PromisesSection />
        <HomeStorySection />
        <HomePreview />
      </PageLayout>
    </>
  );
}
