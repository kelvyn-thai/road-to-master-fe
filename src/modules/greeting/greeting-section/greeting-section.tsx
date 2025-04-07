import Image from "next/image";
import { use } from "react";
import { GetUserResponseDTO, GetUserResponseSchema } from "@/schemas";
import { githubService } from "@/services";

function Greeting() {
  const res = use(githubService.getUserInfo("kelvyn-thai"));

  const data: GetUserResponseDTO = GetUserResponseSchema.parse(res);

  return (
    <>
      {data && (
        <div className="absolute-center text-center flex flex-col items-center gap-4">
          <Image
            width={128}
            height={128}
            alt={"My avatar"}
            src={data.avatar_url}
            className="rounded-full"
            data-testid="avatar"
          />
          <p
            className="text-white text-base font-medium mb-8"
            data-testid="name"
          >
            Hello, I am {data.name}
          </p>
          <h2
            className="text-white text-5xl leading-6xl font-bold m-w-[550px]"
            data-testid="bio"
          >
            {data.bio}
          </h2>
        </div>
      )}
    </>
  );
}

export default Greeting;
