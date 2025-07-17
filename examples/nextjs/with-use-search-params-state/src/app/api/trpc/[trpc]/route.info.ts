import { z } from "zod";
import type { BaseRouteInfo } from "@/routes/makeRoute";

export const Route = {
  name: "ApiTrpcTrpc",
  params: z.object({
    trpc: z.string(),
  })
} satisfies BaseRouteInfo;

