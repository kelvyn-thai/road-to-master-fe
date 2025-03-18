import { ReactElement } from "react";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

export default function Layout({
  children,
}: {
  children: ReactElement | React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
