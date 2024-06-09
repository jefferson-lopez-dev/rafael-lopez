export const parseLRC = (lrc: string): { time: number; text: string }[] => {
  const lines = lrc.split("\n");
  const lyrics = lines
    .map((line) => {
      const match = line.match(/\[(\d+):(\d+).(\d+)\](.+)/);
      if (match) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);
        const milliseconds = parseInt(match[3], 10);
        const time = minutes * 60 + seconds + milliseconds / 1000;
        const text = match[4].trim();
        return { time, text };
      }
      return null;
    })
    .filter((line): line is { time: number; text: string } => line !== null);
  return lyrics;
};
