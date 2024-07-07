/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useMusica } from "@/context/musica";
import { Song } from "@/data";
import clsx from "clsx";
import { useEffect } from "react";
import {
  Controllers,
  Cover,
  Header,
  Lyrics,
  Singer,
  SocialNetworks,
} from "./components";
import "./song.css";
import { Cedits } from "./components/credits";
import { PlayerCard } from "./components/player-card";
import { SongsList } from "./components/songs-list";

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
  }, [currentMusica, song]);

  return (
    <>
      <div className="flex lg:hidden flex-col w-full items-center">
        <div
          className={clsx(
            `rounded-md bg-gradient-to-b max-w-[500px] p-5 px-4 w-full flex justify-center`
          )}
        >
          <div className="flex flex-col rounded-lg bg-neutral-900 justify-between p-5 items-center gap-4 w-full">
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
        <div className="w-full max-w-[500px] flex flex-col gap-10 items-center">
          <div className="w-full flex flex-col gap-5 px-4 pb-5">
            <Lyrics lyric={currentLyrics!} />
            <Singer />
            <Cedits />
            <SocialNetworks />
            <SongsList />
          </div>
        </div>
      </div>
      <div className="max-lg:hidden w-full flex justify-center">
        <div className="flex gap-4 justify-between py-5 w-[900px]">
          <div className="w-full flex flex-col gap-4">
            <PlayerCard />
            <SocialNetworks />
            <Cedits />
            <Singer />
          </div>
          <div className="w-full flex flex-col gap-4">
            <Lyrics lyric={currentLyrics!} />
            <SongsList />
          </div>
        </div>
      </div>
    </>
  );
}
