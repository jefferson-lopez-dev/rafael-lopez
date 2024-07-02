"use client";

import { useMusica } from "@/context/musica";
import { FastForward, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import dics from "../app/[song]/assets/dics.png";

export function SongBackground() {
  const { currentMusica, isPlay, togglePlayPause, nextSong } = useMusica();
  const { push } = useRouter();

  return (
    <div className="sticky  cursor-pointer max-w-[700px] w-full bottom-0 pb-5">
      <div className="w-full relative flex items-center h-[65px] border border-amber-500/30 bg-amber-800 rounded-lg">
        <div
          onClick={() => {
            push(`${currentMusica.slug}`);
          }}
          className="flex gap-2 items-center"
        >
          <div>
            <motion.div
              layout
              className="relative flex ml-[6px] items-center justify-center"
            >
              <motion.div
                layout
                className="z-10 absolute"
                animate={isPlay ? { rotate: [0, 360] } : { rotate: 0 }}
                transition={
                  isPlay
                    ? { repeat: Infinity, duration: 2, ease: "linear" }
                    : {}
                }
              >
                <Image
                  className={clsx(
                    "shadow-inner w-[20px] aspect-square object-cover rounded-full shadow-black transition-all z-10"
                  )}
                  src={currentMusica.cover}
                  alt={currentMusica.slug}
                  width={100}
                  height={100}
                />
              </motion.div>
              <motion.div
                layout
                animate={isPlay ? { rotate: [0, 360] } : { rotate: 0 }}
                transition={
                  isPlay
                    ? { repeat: Infinity, duration: 2, ease: "linear" }
                    : {}
                }
              >
                <Image
                  className={clsx(
                    "aspect-square w-[45px] transition-all brightness-50 contrast-100 z-0 rounded-md"
                  )}
                  src={dics}
                  alt={currentMusica.slug}
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-col">
            <span className="w-full text-ellipsis overflow-hidden whitespace-nowrap ">
              {currentMusica.title}
            </span>
            <span className="text-sm opacity-70">{currentMusica.album}</span>
          </div>
        </div>
        <div className="absolute right-3 flex gap-4">
          <div
            onClick={(e) => {
              e.preventDefault();
              togglePlayPause();
            }}
            className="w-8 cursor-pointer min-w-8 flex items-center justify-center h-8"
          >
            {!isPlay ? (
              <Play className="w-7 h-7 fill-white" />
            ) : (
              <Pause className="w-7 h-7 fill-white" />
            )}
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              nextSong();
            }}
            className="w-8 cursor-pointer min-w-8   flex items-center justify-center h-8"
          >
            <FastForward className="w-7 h-7 fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
