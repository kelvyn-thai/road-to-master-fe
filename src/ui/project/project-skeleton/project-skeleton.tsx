import { ProjectList } from "@/ui/project";

function ProjectSkeleton() {
  return (
    <ProjectList>
      {[...Array(4)].map((_, index) => (
        <li key={index} className="animate-pulse bg-gray-200 rounded-3xl">
          <div className="h-80"></div>
          <div className="h-20"></div>
        </li>
      ))}
    </ProjectList>
  );
}

export default ProjectSkeleton;
