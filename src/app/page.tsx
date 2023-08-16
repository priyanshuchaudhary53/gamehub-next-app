import type { Game } from "@/types";
import Games from "../components/Games";
import PageHeading from "@/components/PageHeading";

const getData = async (): Promise<{ results: Game[] }> => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=e9f3f7bdec2f4679aeb3116d6b735626&page=1&page_size=32`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await getData();

  const games = data["results"];

  return (
    <>
      <PageHeading>All Games</PageHeading>
      <Games intialGames={games} apiRoute="games" />
    </>
  );
}
