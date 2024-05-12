import AboutContentBox from "../components/team-content-box/AboutContentBox";
import InterestContentBox from "../components/team-content-box/InterestContentBox";
import SkillsContentBox from "../components/team-content-box/SkillsContentBox";
import SocmedContentBox from "../components/team-content-box/SocmedContentBox";

const TeamPage = () => {
    return (
        <div className="flex flex-col container mx-auto px-32">
            <div className="rounded-t-3xl bg-white bg-opacity-5 border border-white border-opacity-10 border-b-0 h-[72px] px-8 flex items-center justify-between">
                <p className="font-mono text-kmr-green-0 text-sm">Kumar@Team$ <span className="text-white">&quot;Rizki Fajar&quot;</span> -p <span className="text-white">&quot;Backend-Dev&quot;</span> -a <span className="text-white">20 y.o</span></p>
                <div className="flex gap-2">
                    <div className="w-[14px] h-[14px] bg-red-500 rounded-lg"></div>
                    <div className="w-[14px] h-[14px] bg-yellow-500 rounded-lg"></div>
                    <div className="w-[14px] h-[14px] bg-green-500 rounded-lg"></div>
                </div>
            </div>
            <div className="flex">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 border border-white border-opacity-10 border-b-0">
                        <AboutContentBox article={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of "}/>
                    </div>
                    <div className="border border-white border-opacity-10 border-r-0 box-border">
                        <SkillsContentBox skills={["golang","node","laravel","docker"]}/>
                    </div>
                    <div className="border border-white border-opacity-10 box-border">
                        <InterestContentBox interests={["Music", "Games", "Religions"]}/>
                    </div>
                </div>
                <img src="/member.png" className="aspect-square object-cover"></img>
            </div>
            <div className="py-7 border border-white border-opacity-10 border-y-0">
            </div>
            <div className="flex">
                <div className="flex-1 border border-white border-opacity-10 border-r-0">
                    <SocmedContentBox socmed={"github"} />
                </div>
                <div className="flex-1 border border-white border-opacity-10 border-r-0">
                    <SocmedContentBox socmed={"instagram"} />
                </div>
                <div className="flex-1 border border-white border-opacity-10 border-r-0">
                    <SocmedContentBox socmed={"telegram"} />
                </div>
                <div className="flex-1 border border-white border-opacity-10">
                    <SocmedContentBox socmed={"linkedin"} />
                </div>
            </div>
        </div>
    )
}

export default TeamPage;