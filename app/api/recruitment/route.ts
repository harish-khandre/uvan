import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoClient = new MongoClient(process.env.DATABASE_URL as string);
export async function GET() {
  try {
    await mongoClient.connect();
    const db = mongoClient.db("App-data");
    const recruitment = db.collection("recruitment");

    const recruitmentData = await recruitment
      .find()
      .sort({ _id: -1 })
      .limit(10)
      .toArray();
    return NextResponse.json(recruitmentData);
  } catch (error) {
    console.log("Error fetching data from MongoDB:", error);
    return NextResponse.json(
      { message: "Failed to fetch data from MongoDB" },
      { status: 500 },
    );
  } finally {
    await mongoClient.close();
  }
}
