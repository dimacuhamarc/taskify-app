import { type MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

import Dashboard from "~/pages/dashboard";
import Taskify from "~/pages/taskify";

import { UserData } from "~/utilities/onboardingtypes";

export const meta: MetaFunction = () => {
  return [
    { title: "Taskify | Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [userdata, setUserdata] = useState<UserData | null>(null);
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");
    if (user && token) {
      const userparsed = JSON.parse(user);
      setUserdata(userparsed);
      // console.log(userparsed);
      // console.log(userdata);
    }
  }, []);
  return (  
    <>
      {
        userdata ? <Dashboard propdata={userdata} /> : <Taskify />
      }
    </>
  );
}