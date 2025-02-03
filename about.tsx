import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import  Link  from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-great-vibes text-orange-500">
            About us
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="font-great-vibes text-orange-500">We</span> Create
            the Best Foody Products
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-300">
              <FaCheck className="text-orange-500 mr-3" />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center text-gray-300">
              <FaCheck className="text-orange-500 mr-3" />
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-center text-gray-300">
              <FaCheck className="text-orange-500 mr-3" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <Link href="/about">
          <button className="bg-orange-500 text-black px-6 py-3 mt-6 rounded-lg  border-2 border-transparent hover:border-orange-500 transition hover:bg-black hover:text-orange-500 duration-500">
            Read More
            </button>
            </Link>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
          {/* Omellete Image spans 2 columns */}
          <div className="col-span-2">
            <Image
              src="/hero/omellete.svg"
              alt="Food Image 1"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          {/* Bottom two smaller images */}
          <div>
            <Image
              src="/hero/pic2.svg"
              alt="Food Image 2"
              width={300}
              height={200}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <Image
              src="/hero/pic1.svg"
              alt="Food Image 3"
              width={300}
              height={200}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
