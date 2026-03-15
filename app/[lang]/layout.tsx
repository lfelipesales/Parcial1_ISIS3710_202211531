import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HarryPotterApp",
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="bg-[#e0e0e0]">
        <Header lang={lang} />
        <main>{children}</main>
        <br></br>
        <br></br>
        <Footer />
      </body>
    </html>
  );
}
