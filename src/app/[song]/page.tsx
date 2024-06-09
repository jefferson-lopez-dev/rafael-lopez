import { Song, Songs } from "@/data"; // Importar Songs en lugar de Song
import { Player } from "./player";
import { NoSong } from "./no-song";
import type { Metadata } from "next";

interface Props {
  params: { song: string };
}

function findSongBySlug(slug: string): Song | undefined {
  return Songs.find((song) => song.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const song = Songs.find((song) => song.slug === params.song);

  return {
    title: song?.title || "Cancion no encontrada",
    description: song?.description || "Esta cancion no ha sido encontrada",
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
  const decodedSlug = decodeURIComponent(params.song); // Decodificar el slug si es necesario
  const songData = findSongBySlug(decodedSlug);
  return songData ? <Player {...songData} /> : <NoSong />;
}
