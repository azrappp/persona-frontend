import { useState } from "react";
import Card from "../membercard/Membercard";
import axios from "axios";
import { useEffect } from "react";

function Team() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const getMembers = async () => {
      const membersResponse = await axios.get(
        "http://localhost:4000/api/members"
      );
      setMembers(membersResponse.data.data);
    };
    getMembers();
  }, []);

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
          {members.map((mem) => (
            <Card
              id={mem.id}
              image={mem.picture}
              name={mem.name}
              role={mem.role}
              key={mem.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Team;
