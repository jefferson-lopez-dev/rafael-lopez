import { Song } from "@/data";
import { saveAs } from "file-saver";
import { ID3Writer } from "browser-id3-writer";
import { Songs } from "@/data";

export const downloadSong = async (song: Song) => {
  try {
    const response = await fetch(song.audio);
    const arrayBuffer = await response.arrayBuffer();
    const coverResponse = await fetch(song.cover);
    const coverArrayBuffer = await coverResponse.arrayBuffer();
    const coverUint8Array = new Uint8Array(coverArrayBuffer);

    let lyrics = "";
    if (song.lrc) {
      const lrcResponse = await fetch(song.lrc);
      const lrcText = await lrcResponse.text();
      lyrics = extractLyricsFromLRC(lrcText);
    }

    const TRCK = Songs.findIndex((sg) => sg.slug === song.slug);

    const uint8Array = new Uint8Array(arrayBuffer);

    const writer = new ID3Writer(uint8Array);

    writer
      .setFrame("TIT2", song.title) // Title
      .setFrame("TPE1", ["Rafael Lopez"]) // Artist
      .setFrame("TALB", "Joropo Llano y Leyenda") // Album
      // @ts-ignore
      .setFrame("TYER", "2020") // Year
      // @ts-ignore
      .setFrame("TRCK", TRCK + 1) // Track number
      .setFrame("TCON", ["Llanera"]) // Genre
      .setFrame("COMM", {
        description: "Comment",
        text: "La mejor musica llanera",
      }) // Comment
      .setFrame("USLT", {
        description: "Letra",
        lyrics: lyrics,
      }) // Lyrics
      .setFrame("TPE2", "Rafael Lopez Band") // Band or accompanist
      .setFrame("TCOP", "2024 Rafael Lopez") // Copyright
      .setFrame("TPUB", "Lopez Music Publishing") // Publisher
      .setFrame("TIT1", "Compilation") // Content group description
      .setFrame("TXXX", {
        description: "Personnel",
        value:
          "Arpa: Alonso Castrillo\nCuatro: Jonathan Martínez (poporoy)\nMaracas: Miguel Celis\nBajo: Adán Hernández\nGravado en: pentagrama studio\nVoz: AKC studio Arauca\nTécnico de sonido: Alonso Castrillo\nDiseño: Jefferson López",
      }) // Custom text
      // @ts-ignore
      .setFrame("APIC", {
        type: 3,
        data: coverUint8Array,
        description: "Cover",
        mimeType: "image/jpeg",
      }) // Album art
      .addTag();

    const updatedAudioBlob = writer.getBlob();

    saveAs(updatedAudioBlob, `${song.title || "song"}.mp3`);
  } catch (error) {
    console.error("Error downloading or processing the song:", error);
  }
};

const extractLyricsFromLRC = (lrc: string) => {
  const lines = lrc.split("\n");
  const lyrics = lines
    .map((line) => line.replace(/\[\d{2}:\d{2}\.\d{2,3}\]/g, "").trim())
    .join("\n");
  return lyrics;
};
