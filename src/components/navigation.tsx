"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const buttons = [
  {
    name: "Canciones",
    href: "/",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];

export function Navigation() {
  const path = usePathname();

  return (
    <nav className="w-full max-w-[700px] pb-2 px-5 rounded-md">
      <ul className="flex gap-4">
        {buttons.map(({ name, href }) => {
          const isActive = path === href;

          return (
            <Link
              href={href}
              key={name}
              className={clsx("cursor-pointer transition-colors text-sm", {
                "text-neutral-500": !isActive,
              })}
            >
              {name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
