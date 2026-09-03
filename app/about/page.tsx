import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutHistory from "@/components/about/AboutHistory";
import AboutChef from "@/components/about/AboutChef";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";
import AboutGallery from "@/components/about/AboutGallery";
import AboutDundee from "@/components/about/AboutDundee";

export const metadata: Metadata = {
  title: "About Us | Shiki",
  description:
    "Rooted in respect for tradition and inspired by innovation — meet Chef Tom Buder, our team, and the story behind Shiki.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-svh flex-1 flex-col bg-[#FFFDFC]">
      <Header theme="light" />
      <AboutHero />
      <AboutHistory />
      <AboutChef />
      <AboutTeam />
      <AboutValues />
      <AboutGallery />
      <AboutDundee />
      <Footer />
    </main>
  );
}
