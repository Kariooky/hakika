import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hakikafoods.com"),
  title: "Hakika Foods – Cashew butter, made in small batches",
  description: "Cashew butter made in small batches from East African cashews. Order on WhatsApp. Delivered in Kenya.",
  openGraph: {
    title: "Hakika Foods – Cashew butter",
    description: "Small-batch cashew butter from East African cashews. Order on WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}