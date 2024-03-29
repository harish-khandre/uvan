import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL as string;

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const paths = url.pathname.split("/");
  const category = paths[paths.length - 1];

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("App-data");
    const collection = db.collection("Uvan");
    const blogs = await collection.find({ category: category }).toArray();

    return NextResponse.json(blogs);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch data" });
  } finally {
    await client.close();
  }
}
