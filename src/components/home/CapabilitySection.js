"use client";
import React from "react";
import {
  Users,
  LineChart,
  Share2,
  Monitor,
  Search,
  Video,
  Briefcase,
  Headphones,
  Megaphone,
} from "lucide-react"; 
import { AnimatedElement } from "@/components/common";

const services = [
  { title: "Performance Marketing", icon: <LineChart size={22} /> },
  { title: "Digital Marketing", icon: <Users size={22} /> },
  { title: "Social Media Marketing", icon: <Share2 size={22} /> },
  { title: "Google/Facebook Ads", icon: <Megaphone size={22} /> },
  { title: "Website Design & Development", icon: <Monitor size={22} /> },
  { title: "Content & SEO Strategy", icon: <Search size={22} /> },
  { title: "Video Creation & Motion Graphics", icon: <Video size={22} /> },
  { title: "Business Consulting & Strategy", icon: <Briefcase size={22} /> },
  { title: "Call Center Solution", icon: <Headphones size={22} /> },
];

const CapabilitySection = () => {
  return (
    <section className="bg-black py-16">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-semibold text-red-600">
            Digital Marketing Services
          </h2>
        </AnimatedElement>
      </div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {services.map((service, idx) => (
          <AnimatedElement key={idx} animation="fadeInUp" delay={0.2 + (idx * 0.1)}>
            <div className="flex items-center gap-3 text-white text-lg p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-red-500 transition-all">
              <span className="text-red-500">{service.icon}</span>
              <p className="m-0">{service.title}</p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
};

export default CapabilitySection;
