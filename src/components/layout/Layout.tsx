import { ReactElement } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NavBar } from "@/components/nav-bar";

export default function Layout({
  children,
}: {
  children: ReactElement | React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
