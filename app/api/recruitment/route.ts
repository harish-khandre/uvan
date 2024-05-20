import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const recruitmentData = await db.recruitment.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(recruitmentData);
  } catch (error) {
    console.log("Error fetching data from MongoDB:", error);
    return NextResponse.json(
      { message: "Failed to fetch data from MongoDB" },
      { status: 500 },
    );
  }
}
