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

const TeamPage = () => {
  const [content, setContent] = useState();
  const [picture, setPicture] = useState();
  const params = useParams();

  useEffect(() => {
    const getContent = async () => {
      const resp = await axios.get(
        `http://localhost:4000/api/members/${params?.id}`
      );
      setContent(resp.data.data);
    };
    getContent();
  }, [params.id]);

  useEffect(() => {
    const getPicture = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:4000/api/members/pic/${content?.picture}`,
          {
            responseType: "arraybuffer",
          }
        );
        const blob = new Blob([resp.data], {
          type: ["image/jpeg", "image/jpg", "image/png"],
        });
        const imgUrl = URL.createObjectURL(blob);
        setPicture(imgUrl);
      } catch (error) {
        console.log(error);
      }
    };
    getPicture();
  });
  return (
    <>
      <Navbar />
      <div id="team" className="flex flex-col container mx-auto px-32 py-32">
        <div className="rounded-t-3xl bg-white bg-opacity-5 border border-white border-opacity-10 border-b-0 h-[72px] px-8 flex items-center justify-between">
          <p className="font-mono text-kmr-green-0 text-sm">
            Kumar@Team${" "}
            <span className="text-white">&quot;{content?.name}&quot;</span> -p{" "}
            <span className="text-white">&quot;{content?.role}&quot;</span> -a{" "}
            <span className="text-white">{content?.age} y.o</span>
          </p>
          <div className="flex gap-2">
            <div className="w-[14px] h-[14px] bg-red-500 rounded-lg"></div>
            <div className="w-[14px] h-[14px] bg-yellow-500 rounded-lg"></div>
            <div className="w-[14px] h-[14px] bg-green-500 rounded-lg"></div>
          </div>
        </div>
        <div className="flex">
          <div className="grid grid-cols-2">
            <div className="col-span-2 border border-white border-opacity-10 border-b-0">
              <AboutContentBox article={content?.about} />
            </div>
            <div className="border border-white border-opacity-10 border-r-0 box-border">
              <SkillsContentBox skills={content?.skills} />
            </div>
            <div className="border border-white border-opacity-10 box-border">
              <InterestContentBox interests={content?.interest} />
            </div>
          </div>
          <img
            src={picture}
            className="aspect-square object-cover w-[452px] h-[452px]"
          ></img>
        </div>
        <div className="py-7 border border-white border-opacity-10 border-y-0"></div>
        <div className="flex">
          <div className="flex-1 border border-white border-opacity-10 border-r-0">
            <SocmedContentBox socmed={"github"} link={content?.githubLink} />
          </div>
          <div className="flex-1 border border-white border-opacity-10 border-r-0">
            <SocmedContentBox socmed={"instagram"} link={content?.instaLink} />
          </div>
          <div className="flex-1 border border-white border-opacity-10 border-r-0">
            <SocmedContentBox socmed={"telegram"} link={content?.teleLink} />
          </div>
          <div className="flex-1 border border-white border-opacity-10">
            <SocmedContentBox
              socmed={"linkedin"}
              link={content?.linkedinLink}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
