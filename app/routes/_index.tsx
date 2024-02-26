import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Taskify | Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gray-900 text-bg-gray-900-content h-full page-container gap-6">
      <h1 className="text-5xl font-heading font-bold text-primary">Taskify</h1>
      <p className="font-body">
        Welcome to Taskify! This is a simple task manager built with Remix, Rails, and TailwindCSS + daisyUI
        Tailwind CSS.
      </p>
      <button className="btn btn-neutral">Continue to App</button>
    </div>
  );
}
