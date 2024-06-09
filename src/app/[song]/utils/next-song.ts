import { Song, Songs } from "@/data";

export const nextSong = (song: Song) => {
  const songIndex = Songs.findIndex((sg) => sg.slug === song.slug);

  if (songIndex === Songs.length - 1) {
    return Songs[0].slug;
  }

  const nextIndex = songIndex + 1;
  return Songs[nextIndex]?.slug;
};
