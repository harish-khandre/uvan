import Link from "next/link";

interface RecruitmentData {
  jobTitle: string;
  lastDate: string;
  link: string;
}

const fetchRT = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/recruitment`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const RT = async () => {
  const data = await fetchRT();

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
              {" "}
              <td className="[&:has([role=checkbox])]:pr-0 p-4 align-middle hover:text-blue-900 transition duration-300 ease-in-out">
                <Link href={`${item.link}`}>{item.jobTitle}</Link>
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
};
