import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const latestBlog = await db.blog.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(latestBlog);
  } catch (e) {
    console.error(e);
    return NextResponse.json(new Error("Failed to fetch data"));
  }
}
