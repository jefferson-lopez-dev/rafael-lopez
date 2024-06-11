import { Song } from "@/data";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CardSong({ title, description, time, cover, slug }: Song) {
  return (
    <Link
      href={`/${slug}`}
      className="flex p-5 rounded-md max-sm:bg-neutral-950 group sm:bg-gradient-to-r sm:from-transparent sm:via-neutral-900/65 sm:to-transparent transition-all max-sm:flex-col cursor-pointer justify-between gap-3"
    >
      <div className="flex justify-between">
        <div className="w-24 min-w-24 flex items-center justify-center bg-white h-24 rounded-[7px]">
          <Image
            className="aspect-square object-cover rounded-md"
            src={cover}
            alt={slug}
            width={96}
            height={96}
          />
        </div>
        <div className="w-10 min-w-10 sm:hidden flex items-center justify-center h-10 rounded-full bg-white">
          <Play className="text-black fill-black" />
        </div>
      </div>
      <div className="flex flex-col w-full justify-between items-start h-24">
        <div>
          <span className="font-medium sm:font-bold sm:text-xl">{title}</span>
          <p className="text-sm max-w-[400px] text-neutral-200">
            {description
              .slice(0, 110)
              .concat(description.length > 109 ? "..." : "")}
          </p>
        </div>
        <span className="text-sm font-semibold">{time}</span>
      </div>
      <div className="w-10 group-hover:opacity-100 opacity-0 max-sm:hidden min-w-10 flex items-center justify-center h-10 rounded-full bg-white">
        <Play className="text-black fill-black" />
      </div>
    </Link>
  );
}
