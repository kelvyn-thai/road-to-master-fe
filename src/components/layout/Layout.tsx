import { ReactElement } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({
  children,
}: {
  children: ReactElement | React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
