"use client";

import { use } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList({
  characters,
}: {
  characters: Promise<character>;
}) {
  const allCharacters = use(characters);

  return (
    <div className="grid grid-cols3">
      {allCharacters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </div>
  );
}
