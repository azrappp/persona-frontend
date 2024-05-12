import Imagecard from "../images/Imagecard";

export default function Card(params) {
  return (
    <>
      <div className="flex flex-col place-items-center border border-solid border-white border-opacity-10 max-w-[270px] mb-8">
        <div className="pt-4 px-4">
          <Imagecard></Imagecard>
        </div>
        <div className="font-geist-semibold text-xl mt-4 mb-3">Azrafpunya</div>
        <div className="font-geist-reguler text-sm pb-4">FULL STACK GAMING</div>
      </div>
    </>
  );
}
