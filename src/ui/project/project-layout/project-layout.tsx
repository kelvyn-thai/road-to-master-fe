import { JSX } from "react";

function ProjectLayout({ children }: { children: JSX.Element }) {
  return (
    <section className="bg-primary-900 h-fit min-h-screen p-6">
      <h1 className="mb-5 text-2xl leading-10 font-bold text-white">
        Feature projects
      </h1>
      {children}
    </section>
  );
}

export default ProjectLayout;
