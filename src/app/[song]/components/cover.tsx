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
      className={`pt-3 py-10 pb-1 h-[240px] justify-center flex flex-col gap-2 px-1`}
    >
      <motion.div
        onClick={togglePlayPause}
        layout
        className="relative flex items-center justify-center"
      >
        <motion.div
          layout
          className="z-10 absolute"
          animate={isPlay ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={
            isPlay ? { repeat: Infinity, duration: 2, ease: "linear" } : {}
          }
        >
          <Image
            className={clsx(
              "shadow-inner w-[90px] aspect-square object-cover rounded-full shadow-black transition-all z-10"
            )}
            src={imagen}
            alt={slug}
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          layout
          animate={isPlay ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={
            isPlay ? { repeat: Infinity, duration: 2, ease: "linear" } : {}
          }
        >
          <Image
            className={clsx(
              "aspect-square transition-all brightness-50 contrast-100 z-0 rounded-md",
              {
                "w-[230px]": !isPlay,
                "w-[240px]": isPlay,
              }
            )}
            src={dics}
            alt={slug}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
