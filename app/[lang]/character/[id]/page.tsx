import CharacterDetail from "@/src/components/CharacterDetail";
import { getDictionary } from "@/src/lib/dictionaries";

async function getCharacter(id: string) {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);

  const data = await res.json();

  return data[0];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; lang: "en" | "es" }>;
}) {
  const { id, lang } = await params;

  const dict = await getDictionary(lang);

  const character = await getCharacter(id);

  return <CharacterDetail character={character} dict={dict} />;
}
