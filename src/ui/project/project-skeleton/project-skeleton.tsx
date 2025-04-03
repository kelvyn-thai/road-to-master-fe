function ProjectSkeleton() {
  return (
    <ul className="grid md:grid-cols-2 md:gap-6 min-h-[648px] xs:grid-cols-1 xs:gap-y-4 xs:gap-x-0">
      {[...Array(4)].map((_, index) => (
        <li key={index} className="animate-pulse bg-gray-200 rounded-3xl">
          <div className="h-72"></div>
          <div className="h-20"></div>
        </li>
      ))}
    </ul>
  );
}

export default ProjectSkeleton;
