function Home() {
  return (
    <div className="container mx-auto max-w-[953px]">
      <div className="text-white flex flex-col items-center gap-8">
        <h1 className="font-geist font-bold text-center text-4xl lg:text-6xl">
          Hello World
        </h1>
        <p className="font-geist text-center text-lg lg:text-2xl text-kmr-black-100">
          &quot;Meet our exceptional team ✨ - each member brings expertise and
          passion, driving project success through collaboration and
          innovation&quot;
        </p>
        <button className="mt-8 mb-12 px-8 bg-white py-2.5 text-black font-geist font-bold rounded-full">
          Get to Know
        </button>
        <div className="hidden md:block">
          <img className="aspect-video object-fit" src="/images/ubuntunew.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Home;
