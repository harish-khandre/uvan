"use client";

import { useEffect, useState } from "react";
import { RtSkeleton } from "./rt-skeleton";

interface RecruitmentData {
  jobTitle: string;
  lastDate: string;
}

export const RT = () => {
  const [data, setData] = useState<RecruitmentData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecruitmentData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/recruitment", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          next: {
            revalidate: 60,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecruitmentData();
  }, []);

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
          {loading ? (
            <RtSkeleton />
          ) : (
            //@ts-ignore
            <>
              {data.map((item) => (
                <tr
                  key={item.jobTitle}
                  className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
                >
                  <td className="[&:has([role=checkbox])]:pr-0 p-4 align-middle">
                    {item.jobTitle}
                  </td>
                  <td className="[&:has([role=checkbox])]:pr-0 p-4 align-middle">
                    {item.lastDate}
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};
