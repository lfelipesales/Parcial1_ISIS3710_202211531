import type { Metadata } from "next";
import CharacterList from "@/src/components/CharacterList";
import { getCharacters } from "@/src/lib/getCharacters";
import { getDictionary } from "../../src/lib/dictionaries";

export const metadata: Metadata = {
  title: "Personajes de Harry Potter",
  description:
    "Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales",
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  const characters = getCharacters();

  return (
    <main className="p-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#FFD700]">{dict.title}</h1>
        <h2>{dict.description}</h2>
      </div>

      <div className="mt-6">
        <CharacterList characters={characters} />
      </div>
    </main>
  );
}
