import Image from "next/image";

const FoodCategory = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Food Category Heading */}
        <h1 className="text-2xl font-bold text-orange-500 mb-4 text-center font-great-vibes">
          Food Category
        </h1>

        {/* Choose Food Item Heading */}
        <h1 className="text-3xl font-semibold text-center mb-8 text-white">
          <span className="text-orange-500">Ch</span>oose Food Item
        </h1>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero/FC-pic1.png"
              alt="Fast Food Dish"
              width={400}
              height={300}
              className="transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero/FC-pic2.png"
              alt="Burger"
              width={400}
              height={300}
              className="transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero/FC-pic3.png"
              alt="Salad"
              width={400}
              height={300}
              className="transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>

          {/* Card 4 */}
          <div className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero/FC-pic4.png"
              alt="Donuts"
              width={400}
              height={300}
              className="transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
