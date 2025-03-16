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

  return <div>{title}</div>;
};

export default SinglePost;
