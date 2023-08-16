import Games from "@/components/Games";
import PageHeading from "@/components/PageHeading";
import React from "react";

interface SearchParams {
  q?: string;
}

const getData = async (searchTerm: string) => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=e9f3f7bdec2f4679aeb3116d6b735626&search=${searchTerm}&page=1&page_size=32`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await res.json();
  return data;
};

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  let query = searchParams["q"];
  if (query) {
    query = query.split(" ").join("+");
  } else {
    query = "";
  }

  const data = await getData(query);
  const games = data["results"];

  const heading =
    query !== "" ? `Search results for: ${searchParams["q"]}` : "Games";

  return (
    <>
      <PageHeading>{heading}</PageHeading>
      {games.length > 0 ? (
        <Games
          intialGames={games}
          apiRoute="search"
          params={{ searchTerm: query }}
        />
      ) : (
        <p className="text-center mt-8 text-xl md:text-3xl xl:text-4xl text-accent">
          No games found!
        </p>
      )}
    </>
  );
};

export default SearchPage;
