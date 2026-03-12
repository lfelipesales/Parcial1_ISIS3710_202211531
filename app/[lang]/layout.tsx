import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "es" };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Header lang={params.lang} />
        <main className="bg-[#e0e0e0]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
