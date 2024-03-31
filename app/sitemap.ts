import { MetadataRoute } from "next/types";

interface BlogPost {
  _id: string;
  lastModified: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await fetch(`https://uvan.tech/api/blogs`);
    const blogPosts: BlogPost[] = await response.json();

    const postEntries: MetadataRoute.Sitemap = blogPosts.map(
      ({ _id, lastModified }) => ({
        url: `/blog/${_id}`,
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
