"use client";
import Image from "next/image";

const ColoresCasas: Record<string, string> = {
  Gryffindor: "bg-[#740001]",
  Slytherin: "bg-[#1A472A]",
  Ravenclaw: "bg-[#0E1A40]",
  Hufflepuff: "bg-[#FFD800]",
  NoCasa: "bg-[#D1D5DB]",
};

export default function CharacterCard({ character }: { character: character }) {
  const bgColor = ColoresCasas[character.house] || ColoresCasas["NoCasa"];
  return (
    <div className={`p-4 text-white ${bgColor} flex flex-col items-center`}>
      <Image
        src={character.image}
        alt={character.name}
        width={150}
        height={200}
      />
      <h2 className="mt-2 font-bold text-lg text-center">{character.name}</h2>
      <p className="mt-1 text-center">{character.house || "NoCasa"}</p>
    </div>
  );
}
