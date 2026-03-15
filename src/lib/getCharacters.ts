import { Character } from "@/src/types/character";

export async function getCharacters(): Promise<Character[]> {
  const res = await fetch("https://hp-api.onrender.com/api/characters");

  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }

  const data: Character[] = await res.json();

  return data.slice(0, 12);
}