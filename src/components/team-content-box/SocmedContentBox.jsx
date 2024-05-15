/* eslint-disable react/prop-types */
const renderLogo = (socmed) => {
    switch (socmed) {
        case "telegram":
            return <img className="m-auto" src="/icons/telegram.svg"></img>
        case "instagram":
            return <img className="m-auto" src="/icons/instagram.svg"></img>
        case "github":
            return <img className="m-auto" src="/icons/github.svg"></img>
        case "linkedin":
            return <img className="m-auto" src="/icons/linkedin.svg"></img>
        default:
            return null;
    }
}

const SocmedContentBox = ({socmed, link}) => {
    console.log(link);
    return(
        <a href={link}>
            <div className="flex flex-col gap-6 px-8 py-12 hover:bg-kmr-green-0 transition-colors duration-500">
                <div className="flex">
                    {renderLogo(socmed)}
                </div>
            </div>
        </a>
    )
}

export default SocmedContentBox;
