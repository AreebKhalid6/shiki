import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import SpacesSection from "@/components/SpacesSection";
import SpecialsSection from "@/components/SpecialsSection";
import GallerySection from "@/components/GallerySection";
import ChefSection from "@/components/ChefSection";
import GiftCardSection from "@/components/GiftCardSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 bg-bg-main">
      <Hero />
      <ExperienceSection />
      <SpacesSection />
      <SpecialsSection />
      <GallerySection />
      <ChefSection />
      <GiftCardSection />
      <Footer />
    </main>
  );
}
