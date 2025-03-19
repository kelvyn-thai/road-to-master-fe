import Image from "next/image";
import {
  GetUserResponseDTO,
  GetUserResponseSchema,
  UserEntity,
} from "@/schemas/github";
import githubService from "@/services/Github.services";

async function Greeting() {
  const res: UserEntity = await githubService.getUserInfo("kelvyn-thai");

  const data: GetUserResponseDTO = GetUserResponseSchema.parse(res);

  if (!data) {
    return null;
  }

  return (
    <section
      className="w-full h-[calc(100vh_-_56px)] bg-[#2A4365] relative"
      data-testid="greeting-section"
    >
      <div className="absolute-center text-center flex flex-col items-center gap-4">
        <Image
          width={128}
          height={128}
          alt={"My avatar"}
          src={data.avatar_url}
          className="rounded-full"
          data-testid="avatar"
        />
        <p className="text-base font-medium mb-10" data-testid="name">
          Hello, I am {data.name}
        </p>
        <h2
          className="text-5xl leading-6xl font-bold m-w-[550px]"
          data-testid="bio"
        >
          {data.bio}
        </h2>
      </div>
    </section>
  );
}

export default Greeting;
