import { Header } from "@/components";
import { Navigation } from "@/components/navigation";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Rafael Lopez",
  description: "Sigueme en mis redes sociales",
  creator: "Jefferson Lopez",
  twitter: {
    card: "player",
    images: {
      url: "https://rafael-lopez-canciones.vercel.app/jose_rafael_lopez_1.jpg",
      width: 1200,
      height: 1200,
      alt: "Rafael Lopez",
    },
  },
  openGraph: {
    siteName: "Rafael Lopez",
    type: "website",
    images: {
      url: "https://rafael-lopez-canciones.vercel.app/jose_rafael_lopez_1.jpg",
      width: 1200,
      height: 1200,
      alt: "Rafael Lopez",
    },
  },
};

export default function LayoutContacto({ children }: { children: ReactNode }) {
  return (
    <main className="px-5 min-h-[90dvh] gap-4 flex flex-col items-center select-none">
      <Header />
      <Navigation />
      {children}
    </main>
  );
}
