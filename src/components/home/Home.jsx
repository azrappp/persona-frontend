function Home(params) {
  return (
    <div className="container mx-auto max-w-[953px] pt-40">
      <div className="text-white flex flex-col items-center gap-8">
        <div className="font-geist font-bold text-center text-6xl">
          Hello World
        </div>
        <div className="font-geist text-center text-2xl text-kmr-black-100">
          "Meet our exceptional team ✨ - each member brings expertise and
          passion, driving project success through collaboration and
          innovation."
        </div>
        <button className="mt-8 mb-12 px-8 bg-white py-2.5 text-black font-geist font-bold text-base rounded-full">
          Get to Know
        </button>
        <div>
          <img className="object-cover  " src="/images/ubuntunew.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Home;
