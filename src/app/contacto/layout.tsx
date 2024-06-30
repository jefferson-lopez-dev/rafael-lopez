import { Header } from "@/components";
import { Navigation } from "@/components/navigation";
import { ReactNode } from "react";

export default function LayoutContacto({ children }: { children: ReactNode }) {
  return (
    <main className="px-5 min-h-[90dvh] gap-4 flex flex-col items-center select-none">
      <Header />
      <Navigation />
      {children}
    </main>
  );
}
