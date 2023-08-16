"use client";

import { use, useEffect, useRef, useState } from "react";

import GridItem from "@/components/Game/GridItem";
import InfiniteScroll from "react-infinite-scroll-component";
import type { Game } from "@/types";

export default function Games({
  intialGames,
  apiRoute,
  params,
}: {
  intialGames: Game[];
  apiRoute: "games" | "search";
  params?: { searchTerm: string | undefined };
}) {
  const fetching = useRef(false);
  const [games, setGames] = useState(intialGames);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setGames(intialGames);
  }, [intialGames]);

  let reqUrl: string;

  if (apiRoute === "games") {
    reqUrl = `https://gamehub-next.vercel.app/api/games?page=${page}`;
  }

  if (apiRoute === "search") {
    reqUrl = `https://gamehub-next.vercel.app/api/games/search?q=${params?.searchTerm}&page=${page}`;
  }

  const loadMore = async () => {
    if (!fetching.current) {
      try {
        fetching.current = true;

        const res = await fetch(reqUrl);
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
      id={game.id}
      slug={game.slug}
      key={game.id}
      name={game.name}
      background_image={game.background_image}
      platforms={game.platforms}
    />
  ));

  return (
    <InfiniteScroll
      hasMore={hasMore}
      dataLength={games.length}
      next={loadMore}
      loader={<div className="col-span-full my-4 text-center">loading...</div>}
      className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6"
    >
      {gamesList}
    </InfiniteScroll>
  );
}
