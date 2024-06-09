import { Songs } from "@/data";
import { CardSong } from "./card-song";

export function SongsList() {
  return (
    <section className="max-w-[700px] py-5 flex flex-col gap-3 w-full">
      {Songs.map((song) => {
        return <CardSong key={song.slug} {...song} />;
      })}
    </section>
  );
}
