"use client";

import { useMusica } from "@/context/musica";
import Image from "next/image";
import Link from "next/link";
import youtube from "../../../../public/youtube-icon.svg";

export function SocialNetworks() {
  const { currentMusica, currentTimeSeconds, togglePlayPause, isPlay } =
    useMusica();

  return (
    <div className="flex bg-neutral-900 rounded-lg flex-col">
      <span className="text-sm px-3 opacity-75 pt-3">Plataformas</span>
      <div className="flex gap-3 items-center p-3">
        {currentMusica.platform_links.youtube && (
          <Link
            onClick={() => {
              if (isPlay) {
                togglePlayPause();
              }
            }}
            target="_blank"
            href={`${
              currentMusica.platform_links.youtube
            }&t=${currentTimeSeconds.toFixed()}s`}
            className="flex cursor-pointer border-neutral-700 items-center gap-2 border p-2 pl-3 px-4 rounded-full"
          >
            <Image src={youtube} alt="as" width={30} height={30} />
            <span className="text-sm">Escuchar En Youtube</span>
          </Link>
        )}
      </div>
    </div>
  );
}
