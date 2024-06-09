import { Song } from "@/data";

export const downloadSong = (song: Song) => {
  if (song && song.audio) {
    fetch(song.audio)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `${song?.title}.mp3`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert("Error downloading the song."));
  }
};
