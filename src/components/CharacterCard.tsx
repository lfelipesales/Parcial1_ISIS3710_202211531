"use client";

import Image from "next/image";
import { Character } from "@/src/types/character";
import Link from "next/link";

const BgColorHouses = {
  Gryffindor: "bg-[#740001]",
  Slytherin: "bg-[#1A472A]",
  Ravenclaw: "bg-[#0E1A40]",
  Hufflepuff: "bg-[#FFD800]",
  NoCasa: "bg-[#D1D5DB]",
};

export default function CharacterCard({ character }: { character: Character }) {
  const house = character.house || "NoCasa";

  const bgColor =
    BgColorHouses[house as keyof typeof BgColorHouses] || BgColorHouses.NoCasa;

  return (
    <Link href={`/character/${character.id}`}>
      <div
        className={`rounded-lg shadow-lg overflow-hidden ${bgColor} w-[260px]`}
      >
        <div
          className={
            "px-3 py-2 text-center text-[15px] font-semibold text-white"
          }
        >
          {character.name}
        </div>
        <div className="bg-neutral-200">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
