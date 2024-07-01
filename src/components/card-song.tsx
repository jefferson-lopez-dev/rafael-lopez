"use client";

import { useMusica } from "@/context/musica";
import { Song } from "@/data";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AudioLineas } from "./audio-lineas";

export function CardSong(song: Song) {
  const { title, cover, slug, album } = song;
  const { currentMusica, isPlay, setCurrentMusica } = useMusica();
  const { push } = useRouter();

  return (
    <button
      onClick={() => {
        if (currentMusica.slug === song.slug) {
          push(`${currentMusica.slug}`);
        }
        setCurrentMusica(song);
      }}
      className={clsx(
        "flex px-1 py-1 w-full rounded-md bg-neutral-950 group transition-all max-sm:flex-col cursor-pointer justify-between gap-3",
        {
          "border border-neutral-600/20": currentMusica.slug === slug,
          "border border-neutral-600/0": !(currentMusica.slug === slug),
        }
      )}
    >
      <div className="flex relative w-full gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <Image
              className="aspect-square min-w-[50px] object-cover rounded-md"
              src={cover}
              alt={slug}
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col justify-start w-full">
            <span className="w-full text-start text-ellipsis overflow-hidden whitespace-nowrap ">
              {title}
            </span>
            <span className="text-sm text-start opacity-70">{album}</span>
          </div>
        </div>
        <div
          className={clsx(
            "absolute right-4 opacity-0 transition-all flex items-center justify-center rounded-full",
            {
              "opacity-100": currentMusica.slug === slug && isPlay,
            }
          )}
        >
          <AudioLineas />
        </div>
      </div>
    </button>
  );
}
