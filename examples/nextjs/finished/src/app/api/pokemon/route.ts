import { NextRequest, NextResponse } from "next/server";
import { safeParseSearchParams } from "@/routes/utils"
import { Route } from "./route.info"
import { getFullPokemon } from "@/pokemon";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { q, limit } = safeParseSearchParams(Route.search, req.nextUrl.searchParams)
  return NextResponse.json(await getFullPokemon(limit, q));
}
