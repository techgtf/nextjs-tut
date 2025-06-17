import Image from "next/image";
import Main from "./components/dashboard/main";

export const metadata = {
  title: "Weather App",
  description: "Crated by async dev",
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Main />
    </div>
  );
}
