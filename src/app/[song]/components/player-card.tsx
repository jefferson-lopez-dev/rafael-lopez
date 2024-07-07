/* eslint-disable @next/next/no-img-element */
"use client";

import { useMusica } from "@/context/musica";
import Image from "next/image";
import { Controllers } from "./controllers";
import { Header } from "./header";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { downloadSong } from "../utils";

export function PlayerCard() {
  const {
    currentMusica,
    seekAudio,
    currentTime,
    duration,
    progress,
    togglePlayPause,
    isPlay,
  } = useMusica();

  return (
    <div className="w-full flex-col flex items-center justify-center min-h-[300px] bg-neutral-900 rounded-xl">
      <div className="p-3 w-full flex-col flex gap-3">
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <ArrowLeft className="stroke-1 relative cursor-pointer" />
          </Link>
          <Download
            onClick={async () => {
              await downloadSong(currentMusica);
            }}
            className="stroke-1 cursor-pointer "
          />
        </div>
        <div>
          <img
            className="w-[130px] rounded-lg"
            src={currentMusica.cover}
            alt={currentMusica.author}
            width={50}
            height={50}
          />
        </div>
        <div className="w-full">
          <Controllers
            album={currentMusica.album}
            seekAudio={seekAudio}
            song={currentMusica}
            togglePlayPause={togglePlayPause}
            title={currentMusica.title}
            currentTime={currentTime}
            duration={duration!}
            progress={progress}
            isPlay={isPlay}
          />
        </div>
      </div>
    </div>
  );
}
