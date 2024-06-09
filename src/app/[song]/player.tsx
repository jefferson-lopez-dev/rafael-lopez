"use client";

import { Song } from "@/data";
import { useRef } from "react";
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

export function Player(song: Song) {
  const refAudio = useRef<HTMLAudioElement | null>(null);
  const {
    isPlay,
    currentTime,
    duration,
    progress,
    togglePlayPause,
    currentLyrics,
  } = useSong({
    song: song,
    refAudio,
    lrcUrl: song.lrc!,
  });

  return (
    <>
      <audio ref={refAudio}>
        <source src={song.audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex flex-col gap-10 items-center">
        <div
          className={clsx(
            `rounded-md bg-gradient-to-b w-full flex justify-center from-transparent via-yellow-800/35 to-transparent`,
            {
              "via-yellow-900/50": !isPlay,
              "via-yellow-800/35": isPlay,
              "background-animate": isPlay,
            }
          )}
        >
          <div className="flex flex-col max-w-[500px] px-5 pt-5 items-center gap-24 w-full">
            <Header />
            <Cover
              togglePlayPause={() => {}}
              imagen={song.cover}
              slug={song.slug}
              isPlay={isPlay}
            />
            <Controllers
              togglePlayPause={togglePlayPause}
              title={song.title}
              currentTime={currentTime}
              duration={duration}
              progress={progress}
              isPlay={isPlay}
            />
          </div>
        </div>
        <div className="max-w-[500px] w-full flex flex-col gap-10 items-center">
          <div className="w-full flex flex-col gap-5 px-5 pb-5">
            <Lyrics lyric={currentLyrics} />
            <Singer />
          </div>
        </div>
      </div>
    </>
  );
}
