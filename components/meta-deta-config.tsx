import { Metadata } from "next";

interface MetaDataConfigProps {
  id: string;
}

export const MetaDataConfig = ({ id }: MetaDataConfigProps) => {
  async function generateMetaData(id): Promise<Metadata> {
    const response = await fetch(`/api/blogs/`, {
      method: "GET",
    });
    const blog = await response.json();

    return {
      title: `${title}`,
      openGraph: {
        images: [
          {
            url: `${thumbnail}`,
          },
        ],
      },
    };
  }
};
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function Page({ params, searchParams }: Props) {}
