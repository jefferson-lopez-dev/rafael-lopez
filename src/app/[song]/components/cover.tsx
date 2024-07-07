/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

interface Props {
  togglePlayPause: () => void;
  isPlay: boolean;
  slug: string;
  imagen: string;
}

export function Cover({ togglePlayPause, isPlay, slug, imagen }: Props) {
  return (
    <div
      className={`pt-3 w-full h-full py-10 pb-1 justify-center flex flex-col gap-2 px-1`}
    >
      <Image
        className="w-full h-full rounded-lg"
        src={imagen}
        alt={""}
        width={50}
        height={50}
        quality={100}
        priority
      />
    </div>
  );
}
