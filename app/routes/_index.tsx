import { type MetaFunction } from "@remix-run/node";
import Taskify from "./taskify";

import { useEffect, useState } from "react";

import { SignOutHandler } from "~/services/user-services";

export const meta: MetaFunction = () => {
  return [
    { title: "Taskify | Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface UserData {
  id: number;
  email: string;
  name: string;
  // Add other properties as needed
}


export default function Index() {
  const [userdata, setUserdata] = useState<UserData | null>(null);
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");
    if (user && token) {
      const userparsed = JSON.parse(user);
      setUserdata(userparsed);
      // console.log(userdata);
    }
  }, []);
  return (  
    <>
      {
        userdata ? <div>{userdata.name}<button
        onClick={SignOutHandler}
        className='btn btn-neutral btn-primary animate-fade-up animate-once animate-ease-out'
      >
        Sign Out
      </button></div> : <Taskify />
      }
    </>
  );
}
