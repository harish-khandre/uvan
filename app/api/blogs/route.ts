import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL as string;
export async function GET() {
  const client = new MongoClient(uri);
  try {
    const db = client.db("App-data");
    const blogs = await db
      .collection("Uvan")
      .find()
      .sort({ _id: -1 })
      .toArray();
    return NextResponse.json(blogs);
  } catch (e) {
    console.error(e);
    return NextResponse.json(new Error("Failed to fetch data"));
  } finally {
    await client.close();
  }
}
