/* eslint-disable react/prop-types */
const InterestBox = ({interest}) => {
    return (
        <div className="flex h-8 px-[14px] py-2 justify-center items-center bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md backdrop-blur-lg">
            <p className="font-mono text-[12px] text-white">{interest.interest.name}</p>
        </div>
    )
}

const InterestContentBox = ({interests = []}) => {
    return (
        <div className="flex flex-col gap-6 px-8 py-6">
            <div className="flex gap-3">
                <img src="/icons/interest.svg"></img>
                <h1 className="font-geist-semibold text-white">Interest</h1>
            </div>
            <div className="flex gap-3 flex-wrap">
                {
                    interests.map((interest) => InterestBox({interest}))
                }
            </div>
        </div>
    )
}

export default InterestContentBox;
