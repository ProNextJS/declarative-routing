import { NextRequest, NextResponse } from "next/server";
import { safeParseSearchParams } from "@/routes/utils"
import { Route } from "./route.info"
import { getFullPokemon } from "@/pokemon";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const searchParams = safeParseSearchParams(Route.search, req.nextUrl.searchParams)
  const q = searchParams.q ?? "";
  const limit = searchParams.limit ?? 10;
  return NextResponse.json(await getFullPokemon(+limit, q));
}
