export const Heading = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <div className="text-1xl md:text-3xl font-semibold text-secondary-400">
            Welcome to my thing!
          </div>
          <p className="text-base mt-4">
            Written by <b>Ashish Agarwal</b>
            <br />
            Date Published: <b>19 Dec 2024</b>
            <br />
            Source: <a href="#" target="_blank" className="text-blue-400">Hashnode</a>
          </p>
        </div>
        <div>
          <img
            className="aspect-auto hidden md:block md:w-56 lg:w-96 object-cover rounded-md"
            src="/images/projects/1.png"
            alt="Hello"
          />
        </div>
      </div>
      <article className="w-full pr-12"></article>
    </div>
  );
};
