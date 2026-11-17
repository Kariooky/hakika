export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP ?? "254700000000";

export const PRODUCTS = [
  { id: "370", label: "370g", price: 650, note: "A good first jar.", featured: false },
  {
    id: "730",
    label: "730g",
    price: 1100,
    note: "Better value per gram, for the household or the gym bag.",
    featured: true,
  },
] as const;

export const kes = (n: number) => "KES " + n.toLocaleString("en-KE");

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* Photo slots. Put files in /public/images, then set the path here.
   null = fall back to the CSS jar / plain hero. */
export const IMAGES: {
  heroBg: string | null;
  heroJar: string | null;
  jars: Record<string, string | null>;
} = {
  heroBg: "/images/hero-bg.jpg",
  heroJar: "/images/hero-jar.jpg",
  jars: {
    "370": null, // e.g. "/images/jar-370.png"
    "730": null, // e.g. "/images/jar-730.png"
  },
};