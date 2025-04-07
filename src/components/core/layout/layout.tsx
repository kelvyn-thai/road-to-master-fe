import { ReactElement } from "react";
import { HeaderCSR as Header, Footer } from "@/components";

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
