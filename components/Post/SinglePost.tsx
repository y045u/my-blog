import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title: string;
  description: string;
  create_date: string;
  update_date: string;
  slug: string;
  tags: string;
};

const SinglePost = (props: Props) => {
  const { id, title, description, create_date, update_date, slug, tags } = props;

  return (
    <Link href={`/posts/${slug}`}>
      <section className="lg:w-1/2 bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300">
        <div className="flex items-center gap-3">
          <h2 className="text-gray-100">{title}</h2>
          <div className="text-gray-100">{create_date.substring(0, 10)}</div>
          <span className="text-gray-100 bg-gray-500 rounded-xl px-2 pb-1 font-medium">{tags}</span>
        </div>
      </section>
    </Link>
  );
};

export default SinglePost;
