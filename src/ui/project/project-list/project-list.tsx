import { JSX } from "react";

function ProjectList({ children }: { children: JSX.Element[] }) {
  return (
    <ul className="grid md:grid-cols-2 md:gap-6 min-h-[648px] xs:grid-cols-1 xs:gap-y-4 xs:gap-x-0">
      {children}
    </ul>
  );
}

export default ProjectList;
