"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title:
      "AI Mode in Google Search: Redefining Search with Smarter, Deeper Responses",
    desc: "Discover Google’s latest AI innovation now lives in India—built to answer your most complex queries with precision and depth.",
    image: "https://crezvatic.com/uploads/b6624d514860e35ecc0740c658ebebb0.png",
    slug: "ai-mode-in-google-search",
  },
  {
    title:
      "Marketing Made Smarter: How the 80/20 Rule Helps You Work Less and Win More",
    desc: "In today’s digital world, marketing professionals face an overwhelming array of tools, platforms, and strategies.",
    image:
      "https://crezvatic.com/uploads/f7d57703b8e02c4ce78d1d74c605e827.webp",
    slug: "marketing-made-smarter-8020-rule",
  },
  {
    title: "Chatbots and Conversational Marketing: 24/7 Customer Engagement",
    desc: "Customer expectations have shifted dramatically in today’s digital world. Businesses are expected to be available around the clock.",
    image:
      "https://crezvatic.com/uploads/fe6366f2ef5e28829deb467b4233bc7c.webp",
    slug: "chatbots-and-conversational-marketing",
  },
];

export default function Blogs() {
  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="relative group rounded-xl h-[450px] overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            {/* Thumbnail */}
            <div className="relative h-56 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-20 left-0 right-0 px-4">
              <h2 className="text-white font-semibold text-lg leading-snug">
                {blog.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                {blog.desc}
              </p>
            </div>

            {/* Button */}
            <div className="absolute bottom-4 left-0 right-0 px-4">
              <Link href={`/blog/${blog.slug}`}>
                <button className="w-full bg-red-700 text-white font-medium py-2 rounded-md hover:bg-red-800 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
