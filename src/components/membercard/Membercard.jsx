/* eslint-disable react/prop-types */
// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_SERVER_URL ? process.env.REACT_APP_SERVER_URL : 'http://localhost:4000';
export default function Card({ id, image, name, role }) {
  return (
    <a href={`/team/${id}`} className="w-full">
      <div className="relative flex flex-col border border-solid border-white border-opacity-10 py-4 px-4">
        <div className="relative basis-3/4 pb-[133.3%]">
          <img
            className="absolute h-full w-full object-cover"
            src={BASE_URL + '/api/members/pic/'+image}
            alt={image}
          />
        </div>
        <div className="basis-1/4 flex flex-col justify-center items-center">
          <p className="font-geist font-semibold text-xl mt-4 mb-3">
            {name}
          </p>
          <p className="font-geist text-kmr-black-100 text-sm pb-4">
            {role}
          </p>
          <img className="w-4 h-4 object-fit absolute bottom-0 left-0 -translate-x-2 translate-y-2" src="/images/plus.png" alt="" />
          <img className="w-4 h-4 object-fit absolute top-0 right-0 translate-x-2 -translate-y-2" src="/images/plus.png" alt="" />
        </div>
      </div>
    </a>
  );
}
