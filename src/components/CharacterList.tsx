"use client";

import { use } from "react";
import CharacterCard from "./CharacterCard";
import { Character } from "@/src/types/character";

export default function CharacterList({
  characters,
}: {
  characters: Promise<Character[]>;
}) {
  const allCharacters = use(characters);

  return (
    <div className="grid grid-cols-3 gap-x-15 gap-y-8 w-fit mx-auto">
      {allCharacters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </div>
  );
}
