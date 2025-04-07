import { Suspense } from "react";
import { Layout } from "@/components";
import { ContactMeSection } from "@/modules/contact-me";
import {
  GreetingSection,
  GreetingSkeleton,
  GreetingLayout,
} from "@/modules/greeting";
import {
  ProjectSection,
  ProjectLayout,
  ProjectSkeleton,
} from "@/modules/project";

export default async function Page() {
  return (
    <Layout>
      <GreetingLayout>
        <Suspense fallback={<GreetingSkeleton />}>
          <GreetingSection />
        </Suspense>
      </GreetingLayout>
      <ProjectLayout>
        <Suspense fallback={<ProjectSkeleton />}>
          <ProjectSection />
        </Suspense>
      </ProjectLayout>
      <ContactMeSection />
    </Layout>
  );
}
