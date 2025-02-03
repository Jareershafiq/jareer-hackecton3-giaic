import Image from "next/image";
import Link from "next/link";

const chefs = [
  { name: "D. Stonewood", image: "/hero/card1.png" },
  { name: "D. Greenish", image: "/hero/Card2.png" },
  { name: "M. Willson", subtitle: "Our Main Chef", image: "/hero/Card3.png" },
  { name: "M. Rosethroat", image: "/hero/Card4.png" },
];

const MeetOurChef = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8 font-great-vibes text-orange-500">
          Chef
        </h1>
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-orange-500">Me</span>et Our Chef
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-black rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="w-[312px] h-[390px] relative mb-6">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  width={312}
                  height={330}
                  className="rounded-3xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{chef.name}</h3>
                {chef.subtitle && (
                  <p className="text-sm text-gray-400">{chef.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <Link href="/Menu">
          <button className="bg-orange-500 text-black px-6 py-3 mt-6 rounded-lg  border-2 border-transparent hover:border-orange-500 transition hover:bg-black hover:text-orange-500 duration-500">
            See Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MeetOurChef;
