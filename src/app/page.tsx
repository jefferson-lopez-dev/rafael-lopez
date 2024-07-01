import { Header, SongsList } from "@/components";
import { Navigation } from "@/components/navigation";
import { SongBackground } from "@/components/song-background";

export default function Home() {
  return (
    <main className="px-5 min-h-[90dvh] gap-4 flex flex-col items-center select-none">
      <Header />
      <Navigation />
      <SongsList />
      <SongBackground />
    </main>
  );
}
