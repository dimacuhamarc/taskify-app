import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Taskify | Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-2xl font-heading font-bold">Welcome to Remix!</h1>
      <p className="font-body">
        This is a new Remix app. You can start editing the app by editing the
        files in app
      </p>
    </div>
  );
}
