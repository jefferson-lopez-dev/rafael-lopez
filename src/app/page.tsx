import { Header, SongsList } from "@/components";

export default function Home() {
  return (
    <main className="px-5 gap-4 flex flex-col items-center select-none">
      <Header />
      <nav className="w-full max-w-[700px] pb-2 px-5 rounded-md">
        <ul className="flex gap-4">
          <li className="cursor-pointer text-sm">Canciones</li>
          {/* <li className="cursor-pointer text-sm opacity-60">Albums</li> */}
          {/* <li className="cursor-pointer text-sm opacity-60">Fotos</li> */}
          <li className="cursor-pointer text-sm opacity-60">Contacto</li>
        </ul>
      </nav>
      <SongsList />
    </main>
  );
}
