"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header({ lang }: { lang: "en" | "es" }) {
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLang = segments[1];

  const enPath = pathname.replace(`/${currentLang}`, "/en");
  const esPath = pathname.replace(`/${currentLang}`, "/es");

  return (
    <header className="bg-[#FDB608] flex flex-col items-center py-4 px-6">
      <Link href={`/${lang}`}>
        <Image
          src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
          width={200}
          height={50}
          alt="Logo"
        />
      </Link>
      <div className="flex items-center gap-2 text-sm mt-2 font-bold text-white">
        <Link href={enPath} className="hover:underline">
          EN
        </Link>

        <span>|</span>

        <Link href={esPath} className="hover:underline">
          ES
        </Link>
      </div>
    </header>
  );
}
