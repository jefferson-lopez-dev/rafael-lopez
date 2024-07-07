"use client";

import { useMusica } from "@/context/musica";

const bgs = {
  yellow: "bg-yellow-900",
  green: "bg-green-900",
  neutral: "bg-neutral-900",
};

const text_color = {
  yellow: "text-yellow-500",
  green: "text-green-500",
  neutral: "text-neutral-500",
};

export function Lyrics({ lyric }: { lyric: string }) {
  const { currentMusica, currentLyrics } = useMusica();

  return (
    <div
      className={`w-full relative flex items-center justify-center h-[300px] ${
        bgs[currentMusica.color]
      } rounded-xl`}
    >
      <span
        className={`absolute top-3 text-sm font-bold left-4 ${
          text_color[currentMusica.color]
        }`}
      >
        Letra
      </span>
      <p className="text-4xl px-10 text-center font-bold">{currentLyrics}</p>
    </div>
  );
}
