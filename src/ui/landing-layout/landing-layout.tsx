import { JSX } from "react";

function LandingLayout({
  children,
  title,
  className = "",
  id,
}: {
  children: JSX.Element;
  title: string;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={` h-fit min-h-648 px-4% py-2% ${className}`}>
      <h1 className="mb-6 text-2xl leading-10 font-bold text-white text-center">
        {title}
      </h1>
      <section className="w-3/4 m-auto">{children}</section>
    </div>
  );
}

export default LandingLayout;
