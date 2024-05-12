import Card from "../membercard/Membercard";

function Team(params) {
  return (
    <>
      <div className="text-white mx-auto container px-32 pt-6 flex flex-col gap-2 items-center">
        <div className="font-geist font-semibold text-lg text-kmr-black-100">
          Team
        </div>
        <div className="font-geist font-semibold text-2xl mb-16">
          Meet Our Team
        </div>
        <div className="grid grid-cols-3 gap-8">
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
          <Card
            image={"/images/azrafpunya.png"}
            name={"Azraf wife"}
            role={"Fullstack-Dev"}
          />
        </div>
      </div>
    </>
  );
}
export default Team;
