import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const blogs = await db.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blogs);
  } catch (e) {
    console.error(e);
    return NextResponse.json(new Error("Failed to fetch data"));
  }
}
