import clsx from "clsx";
import { Song } from "@/data";
import { ListMusic, Pause, Play, Share2, SkipForward } from "lucide-react";
import { shareSong } from "../utils";

interface Props {
  togglePlayPause: () => void;
  progress: number;
  currentTime: string;
  duration: string;
  isPlay: boolean;
  title: string;
  song: Song;
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
  } = props;

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col w-full">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="text-sm opacity-80">Rafael Lopez</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <div className="bg-neutral-500 rounded-full h-2 w-full dark:bg-white/30">
            <div
              className={clsx("bg-white h-2 rounded-full")}
              style={{
                width: `${progress + 1.8}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-neutral-300">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <ListMusic className="stroke-1 cursor-pointer" />
          <div className="flex items-center gap-5">
            <a>
              <SkipForward
                className={clsx("fill-white rotate-180", {
                  // "opacity-50 cursor-not-allowed": position === 0,
                })}
              />
            </a>
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
            <a href={"nextSong()"}>
              <SkipForward
                className={clsx("fill-white cursor-pointer", {
                  // "opacity-50 cursor-not-allowed": songs.length === position + 1,
                })}
              />
            </a>
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
