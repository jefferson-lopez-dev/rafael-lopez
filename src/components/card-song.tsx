import { Song } from "@/data";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CardSong({ title, cover, slug, album }: Song) {
  return (
    <Link
      href={`/${slug}`}
      className="flex px-5 py-2 rounded-md max-sm:bg-neutral-950 group sm:bg-gradient-to-r sm:from-transparent sm:via-neutral-900/65 sm:to-transparent transition-all max-sm:flex-col cursor-pointer justify-between gap-3"
    >
      <div className="flex relative w-full gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <Image
              className="aspect-square min-w-[50px] object-cover rounded-md"
              src={cover}
              alt={slug}
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col">
            <span className="w-full text-ellipsis overflow-hidden whitespace-nowrap ">
              {title}
            </span>
            <span className="text-sm opacity-70">{album}</span>
          </div>
        </div>
        <div className="w-8 min-w-8 absolute right-0 flex items-center justify-center h-8 rounded-full bg-white">
          <Play className="text-black w-5 h-5 fill-black" />
        </div>
      </div>
    </Link>
  );
}
