export const IntroBlogCard = ({}) => {
  // TODO : bulk import blogs and map them to cards with links to the blog page
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-1/5 md:w-1/4 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
            Knausgaard typewriter readymade marfa
          </h1>
          <p className="mb-8 leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
        </div>
      </div>
    </section>
  );
};
