import React from "react";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      {/* Support Section */}
      <div className="bg-black text-white px-6 md:px-16 py-6 md:py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl md:text-3xl font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
          </h2>
          <p className="text-sm md:text-base mt-2">
            Don&#39;t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="flex-1 bg-[#FF9F0D] text-white p-2 rounded-l-md"
          />
          <button className="bg-white text-[#FF9F0D] p-2 rounded-r-md">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="border-[#FF9F0D]" />

      {/* Footer Links */}
      <div className="px-6 md:px-16 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-400">
              Corporate clients and leisure travelers rely on us for dependable,
              safe, and professional chauffeured car service worldwide.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="bg-[#FF9F0D] p-3 rounded-full">
                <MdAccessTime className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">
                  Opening Hours
                </h3>
                <p className="text-xs text-gray-400">Mon-Sat: 8.00 - 6.00</p>
                <p className="text-xs text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Help</h2>
            <ul className="text-gray-400 space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "News", href: "#" },
                { label: "Partner", href: "#" },
                { label: "Team", href: "#" },
                { label: "Menu", href: "/Menu" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }, idx) => (
                <li key={idx}>
                  <a href={href} className="hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Help</h2>
            <ul className="text-gray-400 space-y-2">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Reporting", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "Support Policy", href: "#" },
                { label: "Privacy", href: "#" },
              ].map(({ label, href }, idx) => (
                <li key={idx}>
                  <a href={href} className="hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex items-center gap-4 mb-4">
                <Image
                  src="/foot.png"
                  alt="Post Thumbnail"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <h3 className="text-sm text-white">20 Feb 2022</h3>
                  <p className="text-sm text-gray-400">Keep Your Business</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 dark:bg-[#FF9F0D] px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs md:text-sm text-gray-700 dark:text-white">
          © 2025 Jareer . All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
            (Icon, idx) => (
              <div
                key={idx}
                className="bg-white w-8 h-8 flex justify-center items-center rounded-full shadow-sm"
              >
                <Icon className="text-gray-600 text-lg" />
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
