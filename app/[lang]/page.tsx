import { getDictionary } from "../lib/dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <main>
      <h1>{dict.welcome}</h1>
      <button>{dict.profile}</button>
    </main>
  );
}
