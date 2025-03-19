import { faker } from "@faker-js/faker";
import { v4 } from "uuid";
import { Layout } from "@/components/layout";

type Post = {
  id: string;

  code: string;

  title: string;

  content: string;

  author: string;

  date: string;
};

const mockPosts: Post[] = [...Array(10)].map((_, index) => ({
  id: v4(),
  code: String(index + 1),
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraph(),
  author: faker.person.fullName(),
  date: faker.date.past().toISOString(),
}));

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const foundPost = mockPosts.find((post) => post.code === id);

  if (!foundPost) {
    return <div>Post not found! ${id}</div>;
  }

  return (
    <Layout>
      <h1>{foundPost.title}</h1>
      <p>{foundPost.content}</p>
      <p>{foundPost.author}</p>
      <p>{foundPost.date}</p>
    </Layout>
  );
}
