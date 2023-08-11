"use client";

import { useEffect, useRef, useState } from "react";

import GridItem from "@/components/Game/GridItem";
import InfiniteScroll from "react-infinite-scroll-component";
import type { Game } from "@/types";

export default function Games({ intialGames }: { intialGames: Game[] }) {
  const fetching = useRef(false);
  const [games, setGames] = useState(intialGames);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    if (!fetching.current) {
      try {
        fetching.current = true;

        const res = await fetch(
          `https://${process.env.VERCEL_URL}/api/games?page=${page}`
        );
        const data = await res.json();

        const { results }: { results: Game[] } = data["data"];

        if (results.length === 0) {
          setHasMore(false);
          return;
        }

        setGames((prev) => [...prev, ...results]);
        setPage((prev) => prev + 1);
      } finally {
        fetching.current = false;
      }
    }
  };

  const gamesList = games.map((game: Game) => (
    <GridItem
      key={game.id}
      title={game.name}
      image={game.background_image}
      platforms={game.platforms}
    />
  ));

  return (
    <div className="text-white p-4 md:px-12">
      <h1 className="text-3xl md:text-left md:text-4xl lg:text-5xl lg:mt-8 font-bold text-center tracking-tight">
        All Games
      </h1>
      <InfiniteScroll
        hasMore={hasMore}
        dataLength={games.length}
        next={loadMore}
        loader={
          <div className="col-span-full my-4 text-center">loading...</div>
        }
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6"
      >
        {gamesList}
      </InfiniteScroll>
    </div>
  );
}
