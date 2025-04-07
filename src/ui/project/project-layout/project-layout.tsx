import { JSX } from "react";
import { LandingLayout } from "@/ui/landing-layout";

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
