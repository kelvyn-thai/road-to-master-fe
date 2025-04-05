import { Suspense } from "react";
import { Layout } from "@/components";
import { ContactMeSection } from "@/ui/contact-me";
import {
  GreetingSection,
  GreetingSkeleton,
  GreetingLayout,
} from "@/ui/greeting";
import { ProjectSection, ProjectLayout, ProjectSkeleton } from "@/ui/project";

export const revalidate = 180;

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
