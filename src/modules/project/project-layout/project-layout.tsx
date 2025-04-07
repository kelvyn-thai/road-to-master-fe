import { JSX } from "react";
import { LandingLayout } from "@/modules/landing-layout";

function ProjectLayout({ children }: { children: JSX.Element }) {
  return (
    <LandingLayout
      title="Feature projects"
      className="bg-primary-900"
      id="projects"
    >
      {children}
    </LandingLayout>
  );
}

export default ProjectLayout;
