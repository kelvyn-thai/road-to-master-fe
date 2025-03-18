import { Layout } from "@/components/layout";

export default function Page() {
  return (
    <Layout>
      <h1
        className="text-3xl leading-8 font-bold mb-4"
        data-testid="welcome-msg"
      >
        Welcome to our Homepage
      </h1>
      {process.env.NEXT_PUBLIC_API_KEY}
    </Layout>
  );
}
