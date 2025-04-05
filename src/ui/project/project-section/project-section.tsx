import { use } from "react";
import { GetProjectListResponse } from "@/schemas";
import { projectService } from "@/services";
import { ProjectList, ProjectItem } from "@/ui/project";

function ProjectSection() {
  const res: GetProjectListResponse = use(
    projectService.getProjectList({ pageIndex: 1, pageSize: 10 }),
  );

  return (
    <ProjectList>
      {res.data.map((project) => (
        <ProjectItem key={project.id} data={project} />
      ))}
    </ProjectList>
  );
}

export default ProjectSection;
