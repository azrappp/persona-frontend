/* eslint-disable react/prop-types */
const AboutContentBox = ({article}) => {
    return (
        <div className="flex flex-col gap-6 px-8 py-6">
            <div className="flex gap-3">
                <img src="/icons/about.svg"></img>
                <h1 className="font-geist-semibold text-white">About me</h1>
            </div>
            <div className="flex gap-3">
                <article className="text-wrap">
                    <p className="text-sm text-kmr-black-100">{article}</p>
                </article>
            </div>
        </div>
    )
}

export default AboutContentBox;
