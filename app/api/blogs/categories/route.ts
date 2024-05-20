import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const categories = await db.blog.findMany({
      select: {
        category: true,
      },
      distinct: ["category"],
    });

    return NextResponse.json(categories.map(({ category }) => category));
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
