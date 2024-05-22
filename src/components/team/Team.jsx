import { useState } from "react";
import Card from "../membercard/Membercard";
import axios from "axios";
import { useEffect } from "react";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_SERVER_URL ? process.env.REACT_APP_SERVER_URL : 'http://localhost:4000';

function Team() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const getMembers = async () => {
      const membersResponse = await axios.get(
        BASE_URL + "/api/members"
      );
      setMembers(membersResponse.data.data);
    };
    getMembers();
  }, []);

  return (
      <div className="text-white mx-auto container flex flex-col gap-2 items-center max-w-[953px]">
        <div className="font-geist font-semibold text-lg text-kmr-black-100">
          Team
        </div>
        <div className="font-geist font-semibold text-2xl mb-16">
          Meet Our Team
        </div>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 w-full">
          {members.map((mem) => (
            <Card id={mem.id} image={mem.picture} name={mem.name} role={mem.role} key={mem.id} />
          ))}
        </div>
      </div>
  );
}
export default Team;
