import Card from "../membercard/Membercard";

function Team(params) {
  return (
    <>
      <div className="text-white container pt-6 flex flex-col gap-2 items-center">
        <div className="font-geist-semibold text-2xl">Team</div>
        <div className="font-geist-semibold text-2xl mb-16">Meet Our Team</div>
        <div>
          <Card></Card>
        </div>
      </div>
    </>
  );
}
export default Team;
