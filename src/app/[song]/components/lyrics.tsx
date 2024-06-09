export function Lyrics({ lyric }: { lyric: string }) {
  return (
    <div className="w-full relative flex items-center justify-center h-[300px] bg-yellow-900 rounded-xl">
      <span className="absolute top-3 text-sm font-bold left-4 text-yellow-500 ">
        Letra
      </span>
      <p className="text-4xl px-10 text-center font-bold">{lyric}</p>
    </div>
  );
}
