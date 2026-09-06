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
      <Header theme="light" />

      <section className="relative w-full pt-4 sm:pt-6 lg:pt-8">
        <div className="relative overflow-hidden">
          <Image
            src="/images/menuhero.png"
            alt="Menu — Asian Fusion, Omaha, Nebraska"
            width={1024}
            height={168}
            priority
            sizes="100vw"
            className="block h-auto w-full"
          />
        </div>

        <h1 className="sr-only">Our Menu</h1>
      </section>

      <MenuContent />
      <Footer />
    </main>
  );
}
