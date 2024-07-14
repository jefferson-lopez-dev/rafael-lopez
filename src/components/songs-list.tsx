"use client";

import { Song, Songs } from "@/data";
import { SearchX } from "lucide-react";
import { useState } from "react";
import { CardSong } from "./card-song";

export function SongsList() {
  const [SongsData, setSongsData] = useState<Song[]>(Songs);
  const [CurrentSearch, setCurrentSearch] = useState("");
  const [SearchResults, setSearchResults] = useState(0);

  return (
    <section className="max-w-[700px] min-h-screen flex flex-col gap-3 w-full">
      <form
        className="bg-neutral-950 border border-neutral-800 px-3 pr-4 h-[45px] flex items-center justify-between rounded-full"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => {
            setCurrentSearch(e.target.value);
            const Search = Songs.filter((s) =>
              s.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSongsData(Search);
            if (e.target.value === "") {
              setSearchResults(0);
              return;
            }
            setSearchResults(Search.length);
          }}
          className="bg-transparent text-sm placeholder:text-sm placeholder:text-neutral-500 w-full focus:outline-none"
          placeholder="Buscar"
          type="search"
          value={CurrentSearch}
        />
      </form>
      {SearchResults !== 0 && CurrentSearch !== "" && (
        <span className="text-sm text-neutral-400">
          Resultados {SearchResults}
        </span>
      )}
      {SongsData.length === 0 && (
        <div className="flex w-full items-center justify-center min-h-[350px]">
          <div className="flex break-words w-full whitespace-normal text-wrap gap-2 flex-col text-sm text-neutral-400 items-center">
            <SearchX className="stroke-1" />
            <span className="text-center">
              No se encontro una cancion de <strong>Rafael Lopez</strong> con el
              titulo
            </span>
            <strong className="break-words w-full text-center whitespace-normal text-wrap">{`"${CurrentSearch}"`}</strong>
          </div>
        </div>
      )}
      {SongsData.map((song) => {
        return <CardSong key={song.slug} {...song} />;
      })}
    </section>
  );
}
