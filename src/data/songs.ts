import { Formats, audio as GetAudio, lrc as GetLrc } from "@/utils";
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
  format?: Formats;
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
    format,
  }: SongType) {
    this.album = album;
    this.title = title;
    this.cover = cover;
    this.description = description || "La descripcion aun no esta disponible";
    this.time = time;
    this.author = author;
    this.slug = slug(this.title);
    this.audio = GetAudio(this.slug, format);
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

const CreditsMiPrimerAmor: Credit[] = [
  { role: "Arpa", name: "Alonso Castrillo" },
  { role: "Cuatro", name: "Juan David Naranjo" },
  { role: "Maracas", name: "Luis Ovidedo Gomez" },
  { role: "Bajo", name: "Alonso Castrillo" },
  { role: "Gravado en", name: "Pentagrama Studio" },
  { role: "Voz", name: "AKC Studio Arauca" },
  { role: "Técnico de sonido", name: "Alonso Castrillo" },
  { role: "Diseño", name: "Edgar Aponte" },
];

const SongsCorazonDeMarcapasos: SongType[] = [
  {
    title: "Corazon De Marcapasos",
    description: null,
    time: "4:06",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720983166/rafael-lopez/bn7pbafhdbjta1lahyqq.jpg",
    album: "Corazon De Marcapasos",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=YxGGscNMNbA",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Amigas Amante Y Mosas",
    description: null,
    time: "5:48",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720983166/rafael-lopez/bn7pbafhdbjta1lahyqq.jpg",
    album: "Corazon De Marcapasos",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=kvdBAHgB5cc",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Ayer Joven Hoy Anciano",
    description: null,
    time: "4:10",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720983166/rafael-lopez/bn7pbafhdbjta1lahyqq.jpg",
    album: "Corazon De Marcapasos",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=uevwUwMzoXc",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Demostrando Con Hechos",
    description: null,
    time: "4:09",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720983166/rafael-lopez/bn7pbafhdbjta1lahyqq.jpg",
    album: "Corazon De Marcapasos",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=b-zCKusAQ_k",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Tomando Para Olvidar",
    description: null,
    time: "3:42",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720983166/rafael-lopez/bn7pbafhdbjta1lahyqq.jpg",
    album: "Corazon De Marcapasos",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=dfKoiZ2bzkQ",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Distintos Destinos",
    description: null,
    time: "3:22",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720983166/rafael-lopez/bn7pbafhdbjta1lahyqq.jpg",
    album: "Corazon De Marcapasos",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=gVKf1ZZpNe4",
    },
    color: "green",
    format: "m4a",
  },
];

const SongsMiPrimerAmor: SongType[] = [
  {
    title: "Mi Primer Amor",
    description: null,
    time: "4:09",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720981663/rafael-lopez/bcnpdafgrxrviupjbysw.jpg",
    album: "Mi Primer Amor",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=M47Hex5FCDA",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Travesuras",
    description: null,
    time: "5:31",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720981663/rafael-lopez/bcnpdafgrxrviupjbysw.jpg",
    album: "Mi Primer Amor",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=CKPI914rZ2A",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Vivencias De Un Coleador",
    description: null,
    time: "2:59",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720981663/rafael-lopez/bcnpdafgrxrviupjbysw.jpg",
    album: "Mi Primer Amor",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=Q5xgugtBVBg",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Sin Derechos",
    description: null,
    time: "4:22",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720981663/rafael-lopez/bcnpdafgrxrviupjbysw.jpg",
    album: "Mi Primer Amor",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=aJqFOUfUO10",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "El Legado De Mi Llano",
    description: null,
    time: "3:38",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720981663/rafael-lopez/bcnpdafgrxrviupjbysw.jpg",
    album: "Mi Primer Amor",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=8TcdKSyqK6c",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Tu Decision",
    description: null,
    time: "3:26",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720981663/rafael-lopez/bcnpdafgrxrviupjbysw.jpg",
    album: "Mi Primer Amor",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=fhT10L577mg",
    },
    color: "green",
    format: "m4a",
  },
  {
    title: "Mi Fracaso",
    description: null,
    time: "2:53",
    cover:
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1720981663/rafael-lopez/bcnpdafgrxrviupjbysw.jpg",
    album: "Mi Primer Amor",
    author: "Rafael Lopez",
    credits: CreditsMiPrimerAmor,
    platform_links: {
      youtube: "https://www.youtube.com/watch?v=gk_wZXNoQCY",
    },
    color: "green",
    format: "m4a",
  },
];

const SongsUnTragoParaUnDespecho: SongType[] = [
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

const SongsData: SongType[] = [
  ...SongsCorazonDeMarcapasos,
  ...SongsMiPrimerAmor,
  ...SongsUnTragoParaUnDespecho,
];

export const Songs: Song[] = SongsData.map((songData) => new Song(songData));
