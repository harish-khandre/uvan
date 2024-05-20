import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const blog = await db.blog.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blog);
  } catch (e) {
    console.error(e);
    return NextResponse.json(new Error("Failed to fetch data"));
  }
}
