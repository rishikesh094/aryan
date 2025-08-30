"use client";
import { useParams } from "next/navigation";

const blogs = [
  {
    title: "AI Mode in Google Search: Redefining Search with Smarter, Deeper Responses",
    desc: "Discover Google’s latest AI innovation now lives in India—built to answer your most complex queries with precision and depth.",
    image: "https://crezvatic.com/uploads/b6624d514860e35ecc0740c658ebebb0.png",
    slug: "ai-mode-in-google-search",
  },
  {
    title: "Marketing Made Smarter: How the 80/20 Rule Helps You Work Less and Win More",
    desc: "In today’s digital world, marketing professionals face an overwhelming array of tools, platforms, and strategies.",
    image: "https://crezvatic.com/uploads/f7d57703b8e02c4ce78d1d74c605e827.webp",
    slug: "marketing-made-smarter-8020-rule",
  },
  {
    title: "Chatbots and Conversational Marketing: 24/7 Customer Engagement",
    desc: "Customer expectations have shifted dramatically in today’s digital world. Businesses are expected to be available around the clock.",
    image: "https://crezvatic.com/uploads/fe6366f2ef5e28829deb467b4233bc7c.webp",
    slug: "chatbots-and-conversational-marketing",
  },
];

export default function BlogDetail() {
  const { slug } = useParams();
    console.log(slug)
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div className="text-white p-10">Blog not found</div>;

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <img src={blog.image} alt={blog.title} className="rounded-lg mb-6 w-full max-h-[400px] object-cover" />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-300 leading-relaxed">{blog.desc}</p>
    </div>
  );
}
