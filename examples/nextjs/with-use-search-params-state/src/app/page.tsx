import { redirect } from "next/navigation";
import { Pokemon } from "@/routes";

export default function HomePage() {
  redirect(Pokemon());
}
