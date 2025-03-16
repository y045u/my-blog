import Head from "next/head";
import { getAllPosts } from "../../lib/notionAPI";
import SinglePost from "@/components/Post/SinglePost";

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default function Home({ allPosts }) {
  console.log(allPosts);
  return (
    <div className="flex items-center justify-center">
      <Head>
        <title>my-blogaaaaaaaaaaaaaa</title>
      </Head>
      <main className="container w-full mt-16 bg-amber-400 ">
        <h1 className="text-5xl font-medium text-center mb-16">test</h1>
        {allPosts.map((post) => (
          <div className="mx-4">
            <SinglePost id={post.id} title={post.title} description={post.description} create_date={post.create_date} update_date={post.update_date} slug={post.slug} tags={post.tags} />
          </div>
        ))}
      </main>
    </div>
  );
}
