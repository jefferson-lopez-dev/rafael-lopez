/* eslint-disable react-hooks/exhaustive-deps */
import { Song, Songs } from "@/data";
import { useEffect, useState, type MutableRefObject } from "react";
import { parseLRC } from "../utils";

interface Props {
  song: Song;
  refAudio: MutableRefObject<HTMLAudioElement | null>;
  lrcUrl: string | null;
}

export function useSong({ song, refAudio, lrcUrl }: Props) {
  const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(song.time ?? "0:00");
  const [currentTime, setCurrentTime] = useState("0:00");
  const [progress, setProgress] = useState(0);
  const [currentLyrics, setCurrentLyrics] = useState<string>(song.title);
  const [lyrics, setLyrics] = useState<{ time: number; text: string }[]>([]);
  const [endAudio, setEndAudio] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTimeSeconds, setCurrentTimeSeconds] = useState(0);

  const seekAudio = (percentage: number) => {
    if (refAudio.current) {
      const audio = refAudio.current;
      if (!isNaN(audio.duration)) {
        const seekTime = (percentage / 100) * audio.duration;
        audio.currentTime = seekTime;
      }
    }
  };

  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    if (refAudio.current) {
      refAudio.current.muted = newMuteState;
    }
  };

  const togglePlayPause = () => {
    if (refAudio.current) {
      if (isPlay) {
        refAudio.current.pause();
      } else {
        refAudio.current.play();
      }
    }
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    if (refAudio.current) {
      refAudio.current.play();
    }
  }, [refAudio]);

  useEffect(() => {
    if (lrcUrl) {
      setLyrics(parseLRC(lrcUrl));
    }
  }, [lrcUrl]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlayPause();
      }
    };

    const handleAudioEnd = () => {
      setIsPlay(false);
      setEndAudio(true);
    };

    const handleTimeUpdate = () => {
      if (refAudio.current) {
        const audio = refAudio.current;
        if (!isNaN(audio.currentTime) && !isNaN(audio.duration)) {
          const currentMinutes = Math.floor(audio.currentTime / 60);
          const currentSeconds = Math.floor(audio.currentTime % 60)
            .toString()
            .padStart(2, "0");
          const totalMinutes = Math.floor(audio.duration / 60);
          const totalSeconds = Math.floor(audio.duration % 60)
            .toString()
            .padStart(2, "0");

          setCurrentTime(`${currentMinutes}:${currentSeconds}`);
          setCurrentTimeSeconds(audio.currentTime);
          setDuration(`${totalMinutes}:${totalSeconds}`);
          setProgress((audio.currentTime / audio.duration) * 100);

          const currentLyric = lyrics.find(
            (lyric) => lyric.time > audio.currentTime
          );
          const currentLyricIndex = currentLyric
            ? lyrics.indexOf(currentLyric)
            : -1;
          const previousLyric =
            currentLyricIndex > 0 ? lyrics[currentLyricIndex - 1] : null;

          if (previousLyric) {
            setCurrentLyrics(previousLyric.text);
          }
        }
      }
    };

    const audioElement = refAudio.current;
    if (audioElement) {
      audioElement.addEventListener("ended", handleAudioEnd);
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("pause", () => {
        setIsPlay(false);
      });
      audioElement.addEventListener("play", () => {
        setIsPlay(true);
      });
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleAudioEnd);
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlay, refAudio, lyrics]);

  useEffect(() => {
    setIsPlay(false);
    setDuration(song.time ?? "0:00");
    setCurrentTime("0:00");
    setProgress(0);
    setCurrentLyrics(song.title);
    setLyrics([]);
    if (lrcUrl) {
      setLyrics(parseLRC(lrcUrl));
    }
  }, [song, refAudio]);

  return {
    isPlay,
    duration,
    currentTime,
    progress,
    currentLyrics,
    togglePlayPause,
    seekAudio,
    endAudio,
    setEndAudio,
    toggleMute,
    isMuted,
    currentTimeSeconds,
  };
}
