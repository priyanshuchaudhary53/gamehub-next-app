export type Game = {
  id: number;
  slug: string;
  name: string;
  background_image: string | null;
  platforms: [];
};

export type GameDetails = {
  id: number;
  name: string;
  background_image: string;
};
