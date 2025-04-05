import { ReactElement } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({
  children,
}: {
  children: ReactElement | React.ReactNode;
}) {
  return (
    <div id="app" className="overflow-scroll bg-[rgb(43,66,100)]">
      <Header />
      <main className="w-full relative text-neutral-800">{children}</main>
      <Footer />
    </div>
  );
}
