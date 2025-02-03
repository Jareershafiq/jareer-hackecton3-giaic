import Image from "next/image";
import StatsSection from "./stats";
import About from "./about";
import FoodCategory from "./foodcategory";
import WhyChooseUs from "./WhyChooseUs";
import MenuSection from "./MenuSection";
import MeetOurChef from "./chef";
import TestimonialSection from "./testimonial";
import FoodProcessBanner from "./FoodBanner";
import BlogSection from "./blogsection";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative bg-black hero-background h-[100vh] flex items-center ">
        <div className="container px-auto lg:px-10  grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Fancy Subtitle */}
            <p className="text-orange-500 text-xl font-great-vibes">
              It’s Quick & Amazing!
            </p>

            {/* Title */}
            <h1 className="text-5xl font-bold">
              <span className="text-orange-500">The</span> Art of Speed <br />
              Food Quality
            </h1>

            {/* Description */}
            <p className="text-gray-400 pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue.
            </p>

            {/* Call-to-Action Button */}
            <Link href="/Menu">
              <button className="bg-orange-500 text-black font-medium py-3 px-6 hover:py-[0.9rem]  rounded-full shadow-md border-2 border-transparent hover:border-orange-500 transition hover:bg-black hover:text-orange-500 duration-[800ms]">
                See Menu
              </button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative ">
            <Image
              src="/hero/heropic.svg"
              alt="Hero Image"
              width={600}
              height={500}
              className="relative z-10 sm:w-full mx-0 px-0"
            />

            {/* Add more items as needed */}
          </div>
        </div>
      </section>
      <About />
      <FoodCategory />
      <WhyChooseUs />
      <StatsSection />
      <MenuSection />
      <MeetOurChef />
      <TestimonialSection />
      <FoodProcessBanner />
      <BlogSection />
    </>
  );
}
