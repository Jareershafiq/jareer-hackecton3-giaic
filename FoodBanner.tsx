
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

const FoodProcessBanner = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-black text-white p-6 h-auto md:h-[300px]"
      style={{
        backgroundImage: "url('/hero/food-banner.png')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Text Section */}
      <div className="relative z-10 w-full px-4 text-center md:w-3/4 md:px-10 md:text-right space-y-4">
        <h3 className="text-sm md:text-lg font-semibold text-orange-500 font-great-vibes">
          Roasted Elite Plates
        </h3>
        <h1 className="text-2xl md:text-3xl font-bold leading-snug">
          We Document Every Food
          <br /> Bean Process
          <span className="text-orange-500"> until it is saved</span>
        </h1>
        <p className="text-gray-300 text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum.
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 mt-6">
          <Link href="/about">
            <button className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-md  border-2 border-transparent hover:border-orange-500  hover:bg-transparent hover:text-orange-500  transition duration-500">
              Read More
            </button>
          </Link>
          <Link href="#">
            <button className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 py-2 px-6 md:py-3 rounded-md hover:bg-orange-500 hover:text-white transition duration-500 w-full sm:w-auto">
              <FaPlay className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-lg">Play Video</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodProcessBanner;


