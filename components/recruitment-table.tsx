import { db } from "@/lib/db";
import Link from "next/link";

interface RecruitmentData {
  jobTitle: string;
  lastDate: string;
  link: string;
}

export const revalidate = 3600;

async function fetchRT() {
  try {
    const recruitmentData = await db.recruitment.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("fetchRT:", recruitmentData);
    return recruitmentData;
  } catch (error) {
    console.log(error);
  }
}

export default async function RT() {
  const data = await fetchRT();

  if (!data) {
    return <p>Failed to fetch data</p>;
  }

  return (
    <div className="relative w-full overflow-auto px-4 ">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
            <th className="text-muted-foreground [&:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle font-medium">
              Job Title
            </th>
            <th className="text-muted-foreground [&:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle font-medium">
              Last Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: RecruitmentData) => (
            <tr
              key={item.jobTitle}
              className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
            >
              <td className="[&:has([role=checkbox])]:pr-0 p-4 align-middle hover:text-blue-900 transition duration-300 ease-in-out">
                <Link href={item.link}>{item.jobTitle}</Link>
              </td>
              <td className="[&:has([role=checkbox])]:pr-0 p-4 align-middle">
                {item.lastDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
