import { use } from "react";
import { ProjectList, ProjectItem } from "@/modules/project";
import { GetProjectListResponse } from "@/schemas";
import { projectService } from "@/services";

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
