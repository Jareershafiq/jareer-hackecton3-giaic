import Image from "next/image";
import { FaHeart, FaComment, FaEye } from "react-icons/fa";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: "10 February 2022",
      title: "Pellentesque Non Etiam Etiam Mi Aliquam Convallis Mi Quis",
      imageSrc: "/hero/c1.png",
    },
    {
      id: 2,
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Eti, In Blandit Risus Suspendi A",
      imageSrc: "/hero/c2.png",
    },
    {
      id: 3,
      date: "10 February 2022",
      title: "Crasulitur rutrum velit ac congue malesuada",
      imageSrc: "/hero/c3.png",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-great-vibes text-orange-500 mb-4">
          Blog Post
        </h2>
        <h1 className="text-center text-4xl font-bold mb-8">
          <span className="text-orange-500">La</span>test News & Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-black border border-white p-6 rounded-lg shadow-md"
            >
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={400}
                height={250}
                className="rounded-t-lg"
              />
              <div className="mt-4">
                <p className="text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                <div className="flex items-center justify-between mb-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    Learn More
                  </a>
                  <div className="flex gap-3">
                    <div className="flex items-center ">
                      <FaHeart className="text-red-500" />
                    </div>
                    <div className="flex items-center ">
                      <FaComment className="text-gray-500" />
                    </div>
                    <div className="flex items-center ">
                      <FaEye className="text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
