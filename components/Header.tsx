"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header({ lang }: { lang: "en" | "es" }) {
  return (
    <header className='bg-[#FDB608] flex justify-center items-center"'>
      <Link href={`/${lang}`}>
        <Image
          src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
          width={200}
          height={50}
          alt="Logo"
        />
      </Link>
    </header>
  );
}
