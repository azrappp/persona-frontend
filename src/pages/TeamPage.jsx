/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AboutContentBox from "../components/team-content-box/AboutContentBox";
import InterestContentBox from "../components/team-content-box/InterestContentBox";
import SkillsContentBox from "../components/team-content-box/SkillsContentBox";
import SocmedContentBox from "../components/team-content-box/SocmedContentBox";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";

// eslint-disable-next-line no-undef
const BASE_URL = window.REACT_APP_SERVER_URL ? window.REACT_APP_SERVER_URL : 'http://localhost:4000';

const TeamPage = () => {
  const [content, setContent] = useState();
  const params = useParams();

  useEffect(() => {
    const getContent = async () => {
      const resp = await axios.get(
        BASE_URL + `/api/members/${params?.id}`
      );
      setContent(resp.data.data);
    };
    getContent();
  }, [params.id]);

  return (
    <>
      <Navbar />

      <div className="flex flex-col container px-8 mx-auto md:px-16 lg:px-32 py-32">

        {/* Start of Head Section */}
        <div className="rounded-t-3xl bg-white bg-opacity-5 border border-white border-opacity-10 border-b-0 h-[72px] px-8 flex items-center justify-between">
          <p className="font-mono text-kmr-green-0 text-sm">
            Kumar@Team${" "}
            <span className="text-white">&quot;{content?.name}&quot;</span> -p{" "} 
            <span className="text-white">&quot;{content?.role}&quot;</span> -a{" "}
            <span className="text-white">{content?.age} y.o</span>
          </p>
          <div className="hidden gap-2 md:flex">
            <div className="w-[14px] h-[14px] bg-red-500 rounded-lg"></div>
            <div className="w-[14px] h-[14px] bg-yellow-500 rounded-lg"></div>
            <div className="w-[14px] h-[14px] bg-green-500 rounded-lg"></div>
          </div>
        </div>
        {/* End of Head Section */}

        {/* Start of Body Section */}
        <div className="flex flex-col md:flex-row border border-white border-opacity-10">
          <div className="basis-2/3 grid grid-cols-1 divide-y divide-solid divide-white divide-opacity-10">
            <div className="col-span-2">
              <AboutContentBox article={content?.about} />
            </div>
            <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-y-0 divide-y grid-cols-1 divide-solid divide-white divide-opacity-10">
              <SkillsContentBox skills={content?.skills} />
              <InterestContentBox interests={content?.interest} />
            </div>
          </div>
          <div className="basis-1/3">
            <img
              src={BASE_URL + '/api/members/pic/'+ content?.picture}
              className="md:aspect-square object-cover h-full w-full"
              ></img>
          </div>
        </div>
        {/* End of Body Section */}

        {/* Start of Foot Section */}
        <div className="py-7 border border-white border-opacity-10 border-y-0"></div>
        <div className="grid grid-cols-4 border border-white border-opacity-10 divide-x divide-white divide-opacity-10">
            <SocmedContentBox socmed={"github"} link={content?.githubLink} />
            <SocmedContentBox socmed={"instagram"} link={content?.instaLink} />
            <SocmedContentBox socmed={"telegram"} link={content?.teleLink} />
            <SocmedContentBox socmed={"linkedin"} link={content?.linkedinLink} />
        </div>
        {/* End of Foot Section */} 

      </div>

      <Footer />
    </>
  );
};

export default TeamPage;
