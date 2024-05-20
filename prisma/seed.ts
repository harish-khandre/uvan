import { PrismaClient } from "@prisma/client";
import { blogs } from "../lib/blogs";
import { recruitment } from "../lib/recruitment";

const db = new PrismaClient();

interface Blog {
  title: string;
  thumbnail: string;
  category: string;
  content: string;
  youtubeLink: string;
  createdAt: Date;
}

interface Recruitment {
  jobTitle: string;
  lastDate: string;
  createdAt: Date;
}

function transformBlog(data: any): Blog {
  return {
    title: data.title,
    thumbnail: data.thumbnail,
    category: data.category,
    content: JSON.stringify(data.content),
    youtubeLink: data.youtubeLink,
    createdAt: new Date(data.createdAt.$date),
  };
}

const transformedBlogData = blogs.map(transformBlog);

function transformJobData(data: any): Recruitment {
  return {
    jobTitle: data.jobTitle,
    lastDate: data.lastDate, 
    createdAt: new Date(data.createdAt.$date),
  };
}

const transformedJobData = recruitment.map(transformJobData);

async function main() {
  await db.blog.createMany({
    data: transformedBlogData,
  });
  await db.recruitment.createMany({
    data: transformedJobData,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
