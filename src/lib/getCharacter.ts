import { Character } from "@/src/types/character";

export async function getCharacter(id: string): Promise<Character> {
  const res = await fetch(
    `https://hp-api.onrender.com/api/character/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch character");
  }

  const data = await res.json();

  return data[0];
}