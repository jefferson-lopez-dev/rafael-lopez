import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center bg-neutral-950 h-[10dvh]">
      <span className="text-sm flex gap-1">
        Pagina creada por{" "}
        <a
          target="_blank"
          href="https://linktr.ee/jefferson_lopez_dev"
          className="text-blue-500 underline-offset-4 hover:underline cursor-pointer flex items-center gap-1"
        >
          Jefferson Lopez
          <ExternalLink className="w-4 h-4" />
        </a>
      </span>
    </footer>
  );
}
