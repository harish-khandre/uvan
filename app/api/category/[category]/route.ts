import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const paths = url.pathname.split("/");
  const category = paths[paths.length - 1];

  try {
    const blogs = db.blog.findMany({
      where: {
        category: category,
      },
    });

    return NextResponse.json(blogs);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
