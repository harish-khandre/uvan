import { db } from "@/lib/db";
import { MetadataRoute } from "next/types";

const fetchBlogs = async () => {
  try {
    const blogs = await db.blog.findMany();
    return blogs;
  } catch (error) {
    console.error("Error in sitemap :", error);
    return [];
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const blogPosts: any = await fetchBlogs();

    const postEntries: MetadataRoute.Sitemap = blogPosts.map(
      ({ id, lastModified }: any) => ({
        url: `/blog/${id}`,
        lastModified,
        changeFreq: "weekly",
        priority: 0.8,
      }),
    );

    return [
      {
        url: "/",
        changeFrequency: "daily",
        priority: 1.0,
      },
      ...postEntries,
    ];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [
      {
        url: "/",
        changeFrequency: "daily",
        priority: 1.0,
      },
    ];
  }
}
