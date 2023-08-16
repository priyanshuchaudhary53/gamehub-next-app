import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const page = Number.parseInt(searchParams.get("page") || "1", 10);
  const searchTerm = searchParams.get("q");

  const res = await fetch(
    `https://api.rawg.io/api/games?key=e9f3f7bdec2f4679aeb3116d6b735626&search=${searchTerm}&page=${page}&page_size=32`
  );

  const data = await res.json();
  return NextResponse.json({ data });
};
