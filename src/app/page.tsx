import { Suspense } from "react";
import { Layout } from "@/components/layout";
import {
  Greeting,
  GreetingSkeleton,
  GreetingWrapper,
} from "@/modules/greeting";
import { UserEntity } from "@/schemas/github";
import githubService from "@/services/Github.services";

export const revalidate = 180;

export default async function Page() {
  const userInfo: Promise<UserEntity> =
    githubService.getUserInfo("kelvyn-thai");

  return (
    <Layout>
      <Suspense
        fallback={
          <GreetingWrapper>
            <GreetingSkeleton />
          </GreetingWrapper>
        }
      >
        <Greeting userInfo={userInfo} />{" "}
      </Suspense>
    </Layout>
  );
}
