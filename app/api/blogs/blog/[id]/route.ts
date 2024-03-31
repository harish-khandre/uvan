import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.DATABASE_URL as string;

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

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("App-data");
    const query = { _id: new ObjectId(id) };
    const blog = await db.collection("Uvan").find(query).toArray();

    if (!blog || (Array.isArray(blog) && blog.length === 0)) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  } finally {
    await client.close();
  }
}
