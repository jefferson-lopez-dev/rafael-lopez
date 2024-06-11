import { audio as GetAudio, lrc as GetLrc } from "@/utils";
import slug from "slug";

interface SongType {
  title: string;
  author: string;
  album: string;
  time: string;
  description: string | null;
  cover: string;
}

export class Song {
  title: string;
  author: string;
  album: string;
  time: string;
  description: string | null;
  cover: string;
  audio: string;
  lrc: string;
  slug: string;

  constructor({ album, author, cover, description, time, title }: SongType) {
    this.album = album;
    this.title = title;
    this.cover = cover;
    this.description = description || "La descripcion aun no esta disponible";
    this.time = time;
    this.author = author;
    this.slug = slug(this.title);
    this.audio = GetAudio(this.slug);
    this.lrc = GetLrc(this.slug);
  }
}

const SongsData: SongType[] = [
  {
    title: "Patrona siempre es patrona",
    description:
      "Una súplica de amor y perdón, entre despecho y chismes, donde el frío de la ausencia amenaza con destruir el hogar.",
    time: "4:07",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "Si un dia llegara a viejo",
    description: null,
    time: "3:51",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "La celosa",
    description: null,
    time: "4:09",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "Un trago para un despecho",
    description: null,
    time: "3:58",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "Los recuerdos de aquel sitio",
    description: null,
    time: "4:13",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "Otro ramalazo",
    description: null,
    time: "2:48",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "Ilusion pasajera",
    description: null,
    time: "3:51",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "Fragmentos de un amor",
    description: null,
    time: "4:34",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "Carlina",
    description: null,
    time: "3:49",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "Este es mi llano",
    description: null,
    time: "3:36",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "De aquel amor",
    description: null,
    time: "4:28",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
  {
    title: "A mi llano con cariño",
    description: null,
    time: "3:41",
    cover: "/cover-album-1.png",
    album: "Otro Ramalazo",
    author: "Rafael Lopez",
  },
];

export const Songs: Song[] = SongsData.map((songData) => new Song(songData));
