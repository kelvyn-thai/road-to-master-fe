import { Layout } from "@/components/layout";
import { redisConfig } from "@/config/redis.config";

export default function Home() {
  console.info({ redisConfig });
  return (
    <Layout>
      <h1 className="text-3xl leading-8 font-bold mb-4">
        Welcome to our Homepage
      </h1>
      {process.env.NEXT_PUBLIC_API_KEY}
    </Layout>
  );
}
