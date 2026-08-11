import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { EmailPopup } from "@/components/marketing/EmailPopup";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://totalcorenutrition.com"),
  title: {
    default: "Total Core Nutrition — Nutrition From The Core",
    template: "%s — Total Core Nutrition",
  },
  description:
    "Premium formulas designed to support performance, recovery, wellness, and everyday nutrition. Third-party tested, transparent labels, fast U.S. shipping.",
  keywords: [
    "nutrition",
    "supplements",
    "protein",
    "wellness",
    "recovery",
    "greens",
    "multivitamin",
  ],
  openGraph: {
    title: "Total Core Nutrition — Nutrition From The Core",
    description:
      "Premium formulas designed to support performance, recovery, wellness, and everyday nutrition.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
          <EmailPopup />
        </CartProvider>
      </body>
    </html>
  );
}
