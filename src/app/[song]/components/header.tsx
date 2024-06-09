import Link from "next/link";
import { ChevronLeft, Download } from "lucide-react";
import { downloadSong } from "../utils";
import { Song } from "@/data";

export function Header({ song }: { song: Song }) {
  return (
    <div className="flex justify-between items-center w-full">
      <Link href={"/"}>
        <ChevronLeft className="stroke-1 relative right-2 w-8 h-8 cursor-pointer" />
      </Link>
      <p className="text-xs opacity-70">REPRODUCTOR</p>
      <Download
        onClick={async () => {
          await downloadSong(song);
        }}
        className="stroke-1 cursor-pointer "
      />
    </div>
  );
}
