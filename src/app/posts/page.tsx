import { Layout } from "@/components/layout";
import { FormCreatePost } from "@/ui/posts";

const PostsPage = () => {
  return (
    <Layout>
      <h2>Posts page!</h2>
      <FormCreatePost />
    </Layout>
  );
};

export default PostsPage;
