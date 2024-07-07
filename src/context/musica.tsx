/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useSong } from "@/app/[song]/hooks";
import { Song, Songs } from "@/data";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface Values {
  currentLyrics: string | undefined;
  currentTime: string;
  duration: string | undefined;
  isPlay: boolean;
  progress: number;
  seekAudio: (percentage: number) => void;
  togglePlayPause: () => void;
  setCurrentMusica: Dispatch<SetStateAction<Song>>;
  currentMusica: Song;
  nextSong: () => void;
  isMuted: boolean;
  toggleMute: () => void;
  currentTimeSeconds: number;
}

export const MusicaContext = createContext<Values | null>(null);

export const MusicaProvider = ({ children }: { children: ReactNode }) => {
  const defaultSong = Songs[0];
  const [currentMusica, setCurrentMusica] = useState<Song>(defaultSong);
  const refAudio = useRef<HTMLAudioElement | null>(null);
  const {
    currentLyrics,
    currentTime,
    duration,
    isPlay,
    progress,
    seekAudio,
    togglePlayPause,
    endAudio,
    setEndAudio,
    isMuted,
    toggleMute,
    currentTimeSeconds,
  } = useSong({ song: currentMusica, refAudio, lrcUrl: currentMusica.lrc });

  const nextSong = (): void => {
    const songIndex = Songs.findIndex((sg) => sg.slug === currentMusica.slug);
    if (songIndex === Songs.length - 1) {
      setCurrentMusica(Songs[0]);
      return;
    }
    const nextIndex = songIndex + 1;
    setCurrentMusica(Songs[nextIndex]);
  };

  useEffect(() => {
    if (endAudio) {
      setEndAudio(false);
      nextSong();
    }
  }, [endAudio]);

  useEffect(() => {
    if (refAudio.current) {
      refAudio.current.load();
      refAudio.current.play();
    }
  }, [currentMusica]);

  return (
    <MusicaContext.Provider
      value={{
        currentLyrics,
        currentTime,
        duration,
        isPlay,
        progress,
        seekAudio,
        togglePlayPause,
        setCurrentMusica,
        currentMusica,
        nextSong,
        isMuted,
        toggleMute,
        currentTimeSeconds,
      }}
    >
      <audio ref={refAudio}>
        <source src={currentMusica?.audio} type="audio/mp3" />
      </audio>
      {children}
    </MusicaContext.Provider>
  );
};

export const useMusica = () => {
  const context = useContext(MusicaContext);
  if (!context)
    throw new Error("useMusica must be used within a MusicaProvider");
  return context;
};
