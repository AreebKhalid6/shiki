import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuContent from "@/components/MenuContent";

export const metadata: Metadata = {
  title: "Menu | Shiki",
  description: "Explore our full menu of modern Japanese cuisine, sushi, cocktails, and more.",
};

export default function MenuPage() {
  return (
    <main className="flex min-h-svh flex-1 flex-col bg-bg-main">
      <section className="relative w-full">
        <Image
          src="/images/herobg.jfif"
          alt="Shiki dining atmosphere"
          width={5088}
          height={832}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 to-transparent" />

        <Header />

        <h1 className="sr-only">Our Menu</h1>
      </section>

      <MenuContent />
      <Footer />
    </main>
  );
}
