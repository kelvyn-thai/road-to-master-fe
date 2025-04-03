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
      <main className="w-full  bg-primary-100 relative text-neutral-800">
        {children}
      </main>
      <Footer />
    </div>
  );
}
