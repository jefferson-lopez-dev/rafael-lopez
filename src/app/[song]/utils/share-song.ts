"use client";

import { Song } from "@/data";

export const shareSong = async (song: Song) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: song.title,
        url: window.location.origin + "/" + song.slug,
      });
    } catch (error) {
      console.error("Error al compartir enlace:", error);
    }
  } else {
    console.warn("La función de compartir no está soportada en este navegador");
  }
};
