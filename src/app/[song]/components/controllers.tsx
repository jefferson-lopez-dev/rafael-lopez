"use client";

import clsx from "clsx";
import { Song } from "@/data";
import { ListMusic, Pause, Play, Share2, SkipForward } from "lucide-react";
import { shareSong, nextSong, previousSong } from "../utils";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  togglePlayPause: () => void;
  progress: number;
  currentTime: string;
  duration: string;
  isPlay: boolean;
  title: string;
  song: Song;
  seekAudio: (percentage: number) => void;
}

export function Controllers(props: Props) {
  const {
    currentTime,
    duration,
    isPlay,
    progress,
    title,
    song,
    togglePlayPause,
    seekAudio,
  } = props;
  const { push } = useRouter();

  useEffect(() => {
    if (progress >= 100) {
      push(nextSong(song));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const handleSeek = (event: any) => {
    const newProgress = parseFloat(event.target.value);
    seekAudio(newProgress);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col w-full">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="text-sm opacity-80">Rafael Lopez</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <input
            type="range"
            value={progress}
            min="0"
            max="100"
            onChange={handleSeek}
            className="custom-range w-full h-[3px] bg-white bg-transparent cursor-pointer
                   focus:outline-none focus:ring-white transition-colors duration-200 ease-in-out"
          />
          <div className="flex justify-between text-xs text-neutral-300">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <ListMusic className="stroke-1 cursor-pointer" />
          <div className="flex items-center gap-5">
            <Link href={`${previousSong(song)}`}>
              <SkipForward className={clsx("fill-white rotate-180")} />
            </Link>
            <div
              onClick={togglePlayPause}
              className="w-14 cursor-pointer flex items-center justify-center h-14 rounded-full border bg-white"
            >
              {isPlay ? (
                <Pause className="fill-black text-black w-8 h-8" />
              ) : (
                <Play className="fill-black text-black w-8 h-8" />
              )}
            </div>
            <Link href={`${nextSong(song)}`}>
              <SkipForward className={clsx("fill-white cursor-pointer")} />
            </Link>
          </div>
          <Share2
            onClick={async () => {
              await shareSong(song);
            }}
            className="stroke-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
