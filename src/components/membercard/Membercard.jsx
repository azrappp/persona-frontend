/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

export default function Card({ image, name, role }) {
  const [picture, setPicture] = useState('');
  useEffect(() => {
    const getPicture = async () => {
      try {
        const picResponse = await axios.get('http://localhost:4000/api/members/pic/'+image, {
          responseType: 'arraybuffer'
        });
        const blob = new Blob([picResponse.data], {type: ["image/jpeg", "image/jpg", "image/png"]});
        const imgUrl = URL.createObjectURL(blob);
        setPicture(imgUrl);
      } catch (error) {
        console.log(error);
      }
    };
    getPicture();
  });
  console.log(picture);
  return (
    <>
      <div className="flex flex-col place-items-center border border-solid border-white border-opacity-10  max-w-[270px] mb-8">
        <div className="pt-4 px-4">
          <img
            className="object-cover w-[240px] h-[320px]"
            src={picture}
            alt=""
          />
        </div>
        <div className="font-geist font-semibold text-xl mt-4 mb-3">{name}</div>
        <div className="font-geist text-kmr-black-100 text-sm pb-4">{role}</div>
      </div>
    </>
  );
}
