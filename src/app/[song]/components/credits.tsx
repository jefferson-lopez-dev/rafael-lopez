"use client";

import { useMusica } from "@/context/musica";

export function Cedits() {
  const { currentMusica } = useMusica();

  return (
    <div className="flex bg-neutral-900 rounded-lg flex-col">
      <span className="text-sm px-3 opacity-75 pt-3">Creditos</span>
      <div className="flex flex-col gap-3 p-3">
        {currentMusica.credits.map(({ role, name }) => {
          return (
            <div className="text-sm" key={role}>
              <strong className="text-neutral-200">{role}</strong>{" "}
              <span className="text-neutral-400"> {name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
