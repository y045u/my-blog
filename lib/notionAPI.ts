import { getPage } from "@notionhq/client/build/src/api-endpoints";
import { Are_You_Serious } from "next/font/google";

const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_sige: 100,
  });

  const allPosts = posts.results;

  return (
    // allPosts,
    allPosts.map((post) => {
      return getPageMetaData(post);
    })
  );
};

const getPageMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Title.title[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    create_date: post.properties.CreateDate.created_time,
    update_date: post.properties.UpdateDate.last_edited_time,
    slug: post.properties.Slug.rich_text[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
  };
};
