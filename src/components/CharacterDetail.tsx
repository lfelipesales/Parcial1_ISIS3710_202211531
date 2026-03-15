import Image from "next/image";
import { Character } from "@/src/types/character";
import type { Metadata } from "next";

const BorderColorHouses: Record<string, string> = {
  Gryffindor: "border-[#740001]",
  Slytherin: "border-[#1A472A]",
  Ravenclaw: "border-[#0E1A40]",
  Hufflepuff: "border-[#FFD800]",
  NoCasa: "border-[#D1D5DB]",
};

export default function CharacterDetail({
  character,
  dict,
}: {
  character: Character;
  dict: any;
}) {
  if (!character) {
    return <div className="text-center mt-10">Character not found</div>;
  }

  const house = character.house || "NoCasa";

  const borderColor =
    BorderColorHouses[house as keyof typeof BorderColorHouses] ||
    BorderColorHouses.NoCasa;

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl font-bold text-[#FFD73E] mb-4">
        {character.name}
      </h1>
      <div
        className={`grid grid-cols-2 bg-white rounded-lg shadow-lg border-4 ${borderColor} w-[460px] overflow-hidden`}
      >
        <div className="flex flex-col justify-center p-6 space-y-2 bg-[#e0e0e0]">
          <p>
            <strong>{dict.house}:</strong> {character.house || dict.unknown}
          </p>

          <p>
            <strong>{dict.gender}:</strong> {character.gender || dict.unknown}
          </p>

          <p>
            <strong>{dict.wand}:</strong> {character.wand?.core || dict.unknown}
          </p>

          <p>
            <strong>{dict.wood}:</strong> {character.wand?.wood || dict.unknown}
          </p>

          <p>
            <strong>{dict.length}:</strong>{" "}
            {character.wand?.length
              ? `${character.wand.length} cm`
              : dict.unknown}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={character.image}
            alt={character.name}
            width={230}
            height={340}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
