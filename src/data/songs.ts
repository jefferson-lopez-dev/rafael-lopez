import { audio as GetAudio, lrc as GetLrc } from "@/utils";
import slug from "slug";

interface Credit {
  role: string;
  name: string;
}

interface PlatformLinks {
  youtube?: string;
  spotify?: string;
}

interface SongType {
  title: string;
  author: string;
  album: string;
  time: string;
  description: string | null;
  cover: string;
  credits: Credit[];
  platform_links: PlatformLinks;
  color: "yellow" | "green" | "neutral";
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
  credits: Credit[];
  platform_links: PlatformLinks;
  color: "yellow" | "green" | "neutral";

  constructor({
    album,
    author,
    cover,
    description,
    time,
    title,
    credits,
    platform_links,
    color,
  }: SongType) {
    this.album = album;
    this.title = title;
    this.cover = cover;
    this.description = description || "La descripcion aun no esta disponible";
    this.time = time;
    this.author = author;
    this.slug = slug(this.title);
    this.audio = GetAudio(this.slug);
    this.lrc = GetLrc(this.slug);
    this.credits = credits;
    this.platform_links = platform_links;
    this.color = color;
  }
}

const Credits_Un_Trago_Para_Un_Despecho: Credit[] = [
  { role: "Arpa", name: "Alonso Castrillo" },
  { role: "Cuatro", name: "Jonathan Martínez (poporoy)" },
  { role: "Maracas", name: "Miguel Celis" },
  { role: "Bajo", name: "Adán Hernández" },
  { role: "Gravado en", name: "Pentagrama Studio" },
  { role: "Voz", name: "AKC Studio Arauca" },
  { role: "Técnico de sonido", name: "Alonso Castrillo" },
  { role: "Diseño", name: "Jefferson López" },
];

const SongsData: SongType[] = [
  {
    title: "Patrona siempre es patrona",
    description:
      "Una súplica de amor y perdón, entre despecho y chismes, donde el frío de la ausencia amenaza con destruir el hogar.",
    time: "4:07",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=qC66pbrjqio",
    },
    color: "yellow",
  },
  {
    title: "Si un dia llegara a viejo",
    description: null,
    time: "3:51",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=cWwHCHnfbP8",
    },
    color: "yellow",
  },
  {
    title: "La celosa",
    description: null,
    time: "4:09",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=HJ_k-bBUwzs",
    },
    color: "yellow",
  },
  {
    title: "Un trago para un despecho",
    description: null,
    time: "3:58",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=D8nAbv_EGMU",
    },
    color: "yellow",
  },
  {
    title: "Los recuerdos de aquel sitio",
    description: null,
    time: "4:13",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=OF_ogdpBf0U",
    },
    color: "yellow",
  },
  {
    title: "Otro Ramalazo",
    description: null,
    time: "2:48",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=3bwUhq3m2uE",
    },
    color: "yellow",
  },
  {
    title: "Ilusion pasajera",
    description: null,
    time: "3:51",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=B9PX9mySk_E",
    },
    color: "yellow",
  },
  {
    title: "Fragmentos de un amor",
    description: null,
    time: "4:34",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=xJwAezD1GUk",
    },
    color: "yellow",
  },
  {
    title: "Carlina",
    description: null,
    time: "3:49",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=jVj8u-VSf18",
    },
    color: "yellow",
  },
  {
    title: "Este es mi llano",
    description: null,
    time: "3:36",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=D6RqWyXdSR0",
    },
    color: "yellow",
  },
  {
    title: "De aquel amor",
    description: null,
    time: "4:28",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=suQHsYMWO54",
    },
    color: "yellow",
  },
  {
    title: "A mi llano con cariño",
    description: null,
    time: "3:41",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717961397/rafael-lopez/cover-album-1.png",
    album: "Un Trago Para Un Despecho",
    author: "Rafael Lopez",
    credits: Credits_Un_Trago_Para_Un_Despecho,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=kPQiqbiFNKg",
    },
    color: "yellow",
  },
];

export const Songs: Song[] = SongsData.map((songData) => new Song(songData));
