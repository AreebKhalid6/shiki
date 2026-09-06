import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Shiki",
  description:
    "Visit Shiki in Omaha — address, hours, phone, and get in touch for reservations or private events.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-svh flex-1 flex-col bg-bg-main">
      <Header theme="light" />

      <section className="relative w-full">
        <div className="relative overflow-hidden">
          <Image
            src="/images/contacthero.png"
            alt="Contact Us"
            width={1024}
            height={180}
            priority
            sizes="100vw"
            className="block h-auto w-full"
          />
        </div>

        <h1 className="sr-only">Contact Us</h1>
      </section>

      <ContactContent />
      <Footer />
    </main>
  );
}
