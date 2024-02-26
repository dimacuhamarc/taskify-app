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
      <button className="btn btn-neutral">Continue to App</button>
    </div>
  );
}
