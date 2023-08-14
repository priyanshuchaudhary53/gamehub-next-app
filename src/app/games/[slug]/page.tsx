import { GameDetails } from "@/types";
import Image from "next/image";

async function getContent(slug: string) {
  const res = await fetch(
    `https://api.rawg.io/api/games/${slug}?key=e9f3f7bdec2f4679aeb3116d6b735626`
  );

  if (!res.ok) {
    throw new Error("Failed to game data");
  }

  const data = await res.json();
  return data;
}

export default async function GameDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const GameDetails: GameDetails = await getContent(params.slug);
  return (
    <>
      <div className="lg:mt-8 h-[350px] lg:h-[450px] relative">
        <div className="w-full h-full absolute inset-0">
          <Image
            src={GameDetails.background_image}
            width={1000}
            height={500}
            alt={GameDetails.name}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="relative h-full w-full flex justify-center items-end p-4 bg-gradient-to-b from-transparent to-primary">
          <h1 className="text-5xl lg:text-6xl font-black text-center mb-4">
            {GameDetails.name}
          </h1>
        </div>
      </div>
    </>
  );
}
