export type Formats = "mp3" | "m4a";

export function audio(public_id: string, format?: Formats) {
  return `https://res.cloudinary.com/jeffersoncloud/video/upload/v1719782586/rafael-lopez/music/${public_id}.${
    format ?? "mp3"
  }`;
}
