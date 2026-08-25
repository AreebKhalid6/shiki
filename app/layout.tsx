import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shiki | Modern Japanese Cuisine",
  description:
    "Elevated Japanese cuisine in an immersive dining experience framed by art, light, and blossoms.",
  icons: {
    icon: "/images/cta.png",
    apple: "/images/cta.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg-main font-sans text-text-primary">
        {children}
      </body>
    </html>
  );
}
