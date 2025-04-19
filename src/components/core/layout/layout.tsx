import { ReactElement } from "react";
import { HeaderCSR as Header, Footer } from "@/components";

export default function Layout({
  children,
}: {
  children: ReactElement | React.ReactNode;
}) {
  return (
    <div
      id="app"
      className="overflow-scroll bg-primary-200
      bg-pr"
    >
      <Header />
      <main className="w-full relative text-black-500">{children}</main>
      <Footer />
    </div>
  );
}
