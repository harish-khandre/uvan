import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL as string;

export async function GET() {
  const client = new MongoClient(uri);

  try {
    const db = client.db("App-data");
    const blog = await db
      .collection("Uvan")
      .find()
      .sort({ _id: -1 })
      .limit(5)
      .toArray();
    return NextResponse.json(blog);
  } catch (e) {
    console.error(e);
    return NextResponse.json(new Error("Failed to fetch data"));
  } finally {
    await client.close();
  }
}
