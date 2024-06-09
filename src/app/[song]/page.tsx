import { Songs } from "@/data";
import { Player } from "./player";
import { NoSong } from "./no-song";

interface Props {
  params: { song: string };
}

function Song(slug: string) {
  return Songs.find((song) => song.slug === slug);
}

export default function SongReproducer(props: Props) {
  const { params } = props;
  const songData = Song(params.song);

  return songData ? <Player {...songData} /> : <NoSong />;
}
