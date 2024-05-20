import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const paths = url.pathname.split("/");
  const id = paths[paths.length - 1];

  if (!id) {
    return NextResponse.json(
      { error: "Missing blog ID in query parameter" },
      { status: 400 },
    );
  }

  try {
    const blog = await db.blog.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(blog);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
