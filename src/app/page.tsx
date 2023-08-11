import GridItem from "@/components/Game/GridItem";
import type { Game } from "@/app/types";
import Games from "./Games";

const getData = async (): Promise<{ data: { results: Game[] } }> => {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/games`);

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await getData();

  const games = data["data"]["results"];

  // const gamesList = games.map((game: Game) => (
  //   <GridItem
  //     key={game.id}
  //     title={game.name}
  //     image={game.background_image}
  //     platforms={game.platforms}
  //   />
  // ));

  return <Games intialGames={games} />;
}
