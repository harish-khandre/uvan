import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL as string;

export async function GET() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("App-data");
    const collection = db.collection("Uvan");
    const categories = await collection.distinct("category");
    return NextResponse.json(categories);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch data" });
  } finally {
    await client.close();
  }
}
