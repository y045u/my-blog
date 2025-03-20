import { getAllPosts, getSinglePost } from "@/lib/notionAPI";
import React from "react";

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    // fallbackページとは
    // 1. false: 404ページを表示
    // 2. true: ローディング表示 → 新ページを生成。次回以降は即座に表示（キャッシュ済み）
    // 3. "blocking": 前の画面のまま（ローディング表示なし） → 新ページ
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 6,
  };
};

const Post = () => {
  return (
    <section className="container lg:px-2 px-5 h-screen lg:w-2/5 mx-auto mt-20">
      <h2 className="w-full text-2xl font-medium">タイトルです。</h2>
      <div className="border-b-2 w-1/3 mt-1 border-y-sky-900"></div>
      <span className="text-gray-500">2025/05/05</span>
      <br />
      <p className="text-white bg-sky-900 rounded-xl font-medium mt-2 px-2 inline-block">Next.js</p>
      <div className="mt-10 font-medium">aaaaaaaaaaaaaaaaa</div>
    </section>
  );
};

export default Post;
