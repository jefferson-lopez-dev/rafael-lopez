import { Header, SongsList } from "@/components";

export default function Home() {
  return (
    <main className="px-5 flex flex-col items-center select-none">
      <Header />
      <SongsList />
    </main>
  );
}
