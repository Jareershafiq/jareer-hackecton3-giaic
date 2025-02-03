import Image from "next/image";
import { FaHamburger, FaUtensils, FaGlassCheers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/hero/WCU-1.png"
              alt="Tacos"
              width={400}
              height={300}
              className="rounded-md object-cover"
            />
            <Image
              src="/hero/WCU-2.png"
              alt="Fried Chicken"
              width={400}
              height={300}
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/hero/WCU-3.png"
              alt="Burger"
              width={400}
              height={300}
              className="rounded-md object-cover"
            />
            <Image
              src="/hero/WCU-4.png"
              alt="Dinner Plate"
              width={400}
              height={300}
              className="rounded-md object-cover"
            />
            <Image
              src="/hero/WCU-5.png"
              alt="Salad"
              width={400}
              height={300}
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center min-h-full">
          {/* Section Heading */}
          <h2 className="text-orange-400 font-semibold text-lg mb-2 font-great-vibes">
            Why Choose Us
          </h2>
          <h1 className="text-4xl font-bold leading-snug mb-6">
            <span className="text-orange-500">Ex</span>traordinary taste <br />
            And Experienced
          </h1>
          <p className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>

          {/* Icons Section */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Fast Food */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-24 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg transition hover:scale-110">
                <FaHamburger className="text-white text-3xl" />
              </div>
              <p className="mt-4 text-sm text-gray-300">Fast Food</p>
            </div>
            {/* Lunch */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-24 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg transition hover:scale-110">
                <FaUtensils className="text-white text-3xl" />
              </div>
              <p className="mt-4 text-sm text-gray-300">Lunch</p>
            </div>
            {/* Dinner */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-24 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg transition hover:scale-110">
                <FaGlassCheers className="text-white text-3xl" />
              </div>
              <p className="mt-4 text-sm text-gray-300">Dinner</p>
            </div>
          </div>

          {/* Experience Info */}
          <div className="flex items-center gap-4 bg-white rounded-md shadow-lg p-4 w-fit">
            <div className="text-5xl font-bold text-orange-500">30+</div>
            <div className="text-black text-base leading-tight">
              Years of <br />
              <span className="font-semibold">Experience</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default WhyChooseUs;
