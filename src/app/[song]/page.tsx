import { Song, Songs } from "@/data";
import { Player } from "./player";
import { NoSong } from "./no-song";
import type { Metadata } from "next";

interface Props {
  params: { song: string };
}

function findSongBySlug(slug: string): Song {
  const songFind = Songs.find((song) => song.slug === slug);
  return songFind!;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const song = Songs.find((song) => song.slug === params.song);

  return {
    title: song?.title || "Cancion no encontrada",
    description: song?.description ?? "Esta cancion no ha sido encontrada", // Use nullish coalescing to provide a fallback
    publisher: "Jefferson Lopez",
    category: "Musica",
    creator: "Jefferson",
    twitter: {
      card: "player",
      images: {
        url: song?.cover!,
        width: 1200,
        height: 630,
        alt: song?.title,
      },
    },
    openGraph: {
      siteName: "Rafael Lopez - Canciones",
      type: "website",
      images: {
        url: song?.cover!,
        width: 1200,
        height: 630,
        alt: song?.title,
      },
    },
  };
}

export default function SongReproducer(props: Props) {
  const { params } = props;
  const decodedSlug = decodeURIComponent(params.song);
  const songData = findSongBySlug(decodedSlug);
  return songData ? <Player {...songData} /> : <NoSong />;
}
