import { Header, SongsList } from "@/components";
import { Navigation } from "@/components/navigation";
import { SongBackground } from "@/components/song-background";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/session/get-token", {
    headers: headers(),
  });

  return (
    <main className="px-5 min-h-[90dvh] gap-4 flex flex-col items-center select-none">
      <Header />
      <Navigation />
      <SongsList />
      <SongBackground />
    </main>
  );
}
