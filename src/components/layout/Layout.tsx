import { ReactElement } from "react";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

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
