import Image from "next/image";
import Link from "next/link";
import { GetProjectListResponse } from "@/schemas";

function ProjectItem({
  data,
}: {
  data: GetProjectListResponse["data"][number];
}) {
  const { id, title, shortDescription, imageURL } = data;

  return (
    <Link
      href={`/project/${id}`}
      className="text-black rounded-3xl bg-white hover:shadow-3xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.01]"
    >
      <div className="relative h-72">
        <Image
          src={imageURL}
          alt={shortDescription}
          fill
          className="rounded-2xl"
        />
      </div>
      <div className="h-24 rounded-ee-3xl rounded-es-3xl px-4 py-2">
        <p className="truncate font-bold lg:text-xl xs:text-lg text-neutral-900 capitalize mb-1">
          {title}
        </p>
        <p className="lg:text-base xs:text-sm text-neutral-700 mb-1 truncate">
          {shortDescription}
        </p>
        <p className="text-black font-bold text-sm hover:underline">See more</p>
      </div>
    </Link>
  );
}

export default ProjectItem;
