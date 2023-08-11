import type { Game } from "@/app/types";
import Games from "../components/Games";

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

  return <Games intialGames={games} />;
}
