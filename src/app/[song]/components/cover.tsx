"use client";

import clsx from "clsx";
import dics from "../assets/dics.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  togglePlayPause: () => void;
  isPlay: boolean;
  slug: string;
  imagen: string;
}

export function Cover({ togglePlayPause, isPlay, slug, imagen }: Props) {
  return (
    <div
      className={`pt-3 py-10 pb-1 h-[200px] sm:h-[250px] justify-center flex flex-col gap-2 px-1`}
    >
      <motion.div
        layout
        onClick={togglePlayPause}
        className={clsx(
          "relative group cursor-pointer w-full h-full rounded-md",
          { "right-3": isPlay }
        )}
      >
        <motion.div
          layout
          className={clsx(
            "absolute w-full h-full justify-center items-center",
            { "left-[75px]": isPlay }
          )}
        >
          <Image
            className={clsx(
              "aspect-square transition-all brightness-50 contrast-100 rounded-md",
              {
                "w-[180px] sm:w-[230px]": !isPlay,
                "w-[190px] sm:w-[240px]": isPlay,
                "animate-spin-slow": isPlay,
              }
            )}
            src={dics}
            alt={slug}
          />
        </motion.div>
        <motion.img
          className={clsx(
            "shadow-2xl aspect-square contrast-125 object-cover rounded-md shadow-black transition-all relative",
            {
              "w-[180px] sm:w-[230px]": !isPlay,
              "w-[190px] sm:w-[240px]": isPlay,
              "brightness-75": !isPlay,
              "brightness-100": isPlay,
            }
          )}
          src={imagen}
          alt={slug}
        />
      </motion.div>
    </div>
  );
}
