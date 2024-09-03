import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={`${roboto.className}`}>Foodie App Homepage</h1>
    </div>
  );
}
