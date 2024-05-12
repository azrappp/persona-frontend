/* eslint-disable react/prop-types */

const renderLogo = (skill) => {
    switch (skill) {
        case "node":
            return <img className="m-auto" src="/icons/nodejs.svg"></img>
        case "golang":
            return <img className="m-auto" src="/icons/golang.svg"></img>
        case "docker":
            return <img className="m-auto" src="/icons/docker.svg"></img>
        case "laravel":
            return <img className="m-auto" src="/icons/laravel.svg"></img>
        default:
            return null;
    }
}

const LogoBox = (renderer, skill) => {
    return (
        <div className="w-8 h-8 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg flex justify-center items-center backdrop-blur-lg">
            <div className="w-4 h-4 flex">
                {renderer(skill)}
            </div>
        </div>
    )
}

const SkillsContentBox = ({skills}) => {
    return (
        <div className="flex flex-col gap-6 px-8 py-6">
            <div className="flex gap-3">
                <img src="/icons/skill.svg"></img>
                <h1 className="font-geist-semibold text-white">Skills</h1>
            </div>
            <div className="flex gap-6">
                {
                    skills.map((skill) => LogoBox(renderLogo, skill))
                }
            </div>
        </div>
    )
}

export default SkillsContentBox;
