import { use } from "react";
import { GetProjectListResponse } from "@/schemas";
import { projectService } from "@/services";
import { ProjectItem } from "@/ui/project";

function ProjectList() {
  const res: GetProjectListResponse = use(
    projectService.getProjectList({ pageIndex: 1, pageSize: 10 }),
  );
  return (
    <ul className="grid md:grid-cols-2 md:gap-6 min-h-[648px] xs:grid-cols-1 xs:gap-y-4 xs:gap-x-0">
      {res.data.map((project) => (
        <ProjectItem key={project.id} data={project} />
      ))}
    </ul>
  );
}

export default ProjectList;
