"use client";

import { Song } from "@/data";
import { useEffect, useRef } from "react";
import {
  Cover,
  Header,
  Controllers,
  Lyrics,
  Singer,
  SocialNetworks,
} from "./components";
import { useSong } from "./hooks";
import clsx from "clsx";
import "./song.css";
import { useMusica } from "@/context/musica";

export function Player(song: Song) {
  const {
    setCurrentMusica,
    currentLyrics,
    currentTime,
    duration,
    isPlay,
    progress,
    seekAudio,
    togglePlayPause,
    currentMusica,
  } = useMusica();

  useEffect(() => {
    if (currentMusica.slug !== song.slug) {
      setCurrentMusica(song);
    }
  }, [currentMusica.slug, setCurrentMusica, song]);

  return (
    <>
      <div className="flex flex-col gap-10 items-center">
        <div
          className={clsx(
            `rounded-md bg-gradient-to-b w-full flex justify-center from-transparent via-yellow-800/35 to-transparent`,
            {
              "via-yellow-900/50": !isPlay,
              "via-yellow-900/35": isPlay,
              "background-animate": isPlay,
            }
          )}
        >
          <div className="flex flex-col max-w-[500px] h-full justify-between px-5 pt-5 items-center gap-24 w-full">
            <Header song={song} />
            <Cover
              togglePlayPause={() => {}}
              imagen={song.cover}
              slug={song.slug}
              isPlay={isPlay}
            />
            <Controllers
              album={song.album}
              seekAudio={seekAudio}
              song={song}
              togglePlayPause={togglePlayPause}
              title={song.title}
              currentTime={currentTime}
              duration={duration!}
              progress={progress}
              isPlay={isPlay}
            />
          </div>
        </div>
        <div className="max-w-[500px] w-full flex flex-col gap-10 items-center">
          <div className="w-full flex flex-col gap-5 px-5 pb-5">
            <Lyrics lyric={currentLyrics!} />
            <Singer />
            <SocialNetworks />
          </div>
        </div>
      </div>
    </>
  );
}
