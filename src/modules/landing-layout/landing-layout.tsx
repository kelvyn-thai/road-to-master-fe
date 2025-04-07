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
      <section className="w-3/4 m-auto">
        <h1 className="mb-6 text-3xl leading-10 font-bold text-white">
          {title}
        </h1>
        {children}
      </section>
    </div>
  );
}

export default LandingLayout;
