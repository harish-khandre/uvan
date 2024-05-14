import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex justify-center items-center h-full">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/uvan.tech.png"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              UvanTech: Empowering Knowledge, Unlocking Opportunities
            </h1>
            <p className="mb-8 leading-relaxed">
              Uvan Tech is your go-to destination for staying ahead of the curve
              in the ever-evolving landscape of government schemes and
              requirements. Our YouTube channel is a comprehensive resource that
              keeps you informed about the latest initiatives, ensuring you
              never miss out on valuable opportunities.
            </p>
            <p className="mb-8 leading-relaxed">
              At Uvan Tech, we understand the importance of accessible and
              reliable information in today's fast-paced world. That's why our
              team of dedicated experts meticulously curates and presents the
              most up-to-date insights, making it easier for you to navigate
              through the complexities of government programs.
            </p>
            <p className="mb-8 leading-relaxed">
              But our mission doesn't stop there. Our dynamic blogging platform
              serves as an extension of our commitment to knowledge-sharing.
              Here, we delve deeper into topics that demand a more nuanced
              exploration, providing you with in-depth analyses and
              thought-provoking perspectives.
            </p>
            <p className="mb-8 leading-relaxed">
              With Uvan Tech, you'll not only stay informed but also gain a
              comprehensive understanding of the opportunities that await. Join
              our community of knowledge seekers and unlock your full potential
              by staying ahead of the curve.
            </p>
            <p className="mb-4 leading-relaxed">
              Explore. Learn. Grow with Uvan Tech.
            </p>
            <p className="mb-8 leading-relaxed">uvantech1801@gmail.com</p>
            <div className="flex justify-center">
              <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href="/">Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
