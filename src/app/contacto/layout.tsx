import { Header } from "@/components";
import { Navigation } from "@/components/navigation";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contacto - Rafael Lopez",
  description: "Sigueme en mis redes sociales",
  openGraph: {
    images: "/jose_rafael_lopez_1.jpg",
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
