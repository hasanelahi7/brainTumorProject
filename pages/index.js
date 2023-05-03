import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/navbar.js";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleTryClick = () => {
    router.push("/try");
  };

  const handleAboutClick = () => {
    router.push("/about");
  };

  return (
    <div className="w-full flex items-center mt-10">
      <div className="w-full md:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 px-8 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Brain Tumor Detection System
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-7 justify-center md:justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl"
              onClick={handleTryClick}
            >
              Try for Free
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl"
              onClick={handleAboutClick}
            >
              See How It Works
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/brain_img.png"
            alt="product"
            className="rounded-lg hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
