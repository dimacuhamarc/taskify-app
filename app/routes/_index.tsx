import { type MetaFunction } from "@remix-run/node";
import Taskify from "./taskify";

export const meta: MetaFunction = () => {
  return [
    { title: "Taskify | Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return ( 
    <>
      <Taskify />
    </>
  );
}
