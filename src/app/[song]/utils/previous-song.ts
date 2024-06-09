import { Song, Songs } from "@/data";

export const previousSong = (song: Song) => {
  const songIndex = Songs.findIndex((sg) => sg.slug === song.slug);

  if (songIndex === 0) {
    const lastSongIndex = Songs.length - 1;
    return Songs[lastSongIndex].slug;
  }

  const previousIndex = songIndex - 1;
  return Songs[previousIndex]?.slug;
};
