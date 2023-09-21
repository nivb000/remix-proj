import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Project" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <div>
      <h1>Welcome to Remix</h1>
      <h3>Home Page</h3>
    </div>
}
