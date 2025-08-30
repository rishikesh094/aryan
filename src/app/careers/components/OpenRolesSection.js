"use client";

import { useState } from "react";

const jobs = [
  {
    title: "Video Editor Cum Motion Graphic Designer",
    description:
      "We are looking for a Motion Graphic Designer / Graphic Designer/ Editor to create engaging and on-brand graphics for a variety of media.",
    details: [
      "Conceptualizing visuals based on requirements",
      "Creating images and layouts by hand or using design software",
      "Testing graphics across various media",
    ],
  },
  {
    title: "Paid Marketing Specialist ( Google, Meta, Linkedin )",
    description:
      "We are seeking a motivated and experienced Google & Facebook Ads Specialist to join our digital marketing agency.",
    details: [
      "Managing and optimizing Google Ads campaigns",
      "Scaling Facebook and LinkedIn ad campaigns",
      "Analyzing performance & ROI",
    ],
  },
  {
    title: "Visualizer Cum Graphic Designer",
    description:
      "Visualizer cum graphic designer is a professional who uses creative thinking, visual composition, and illustration to create designs.",
    details: ["Designing creatives for social media", "Website UI graphics"],
  },
  {
    title: "Social Media Marketer",
    description:
      "Looking for an enthusiastic and young individual to join our team as a Social Media Executive.",
    details: [
      "Maintain social media platforms",
      "Create captivating content",
      "Monitor user engagement & analyze feedback",
    ],
  },
  {
    title: "SEO Specialist",
    description:
      "We are looking for a result-driven SEO executive to be responsible for developing optimized web content.",
    details: [
      "Develop optimized content",
      "Monitor SEO KPIs & ROI",
      "Maintain website architecture",
    ],
  },
  {
    title: "Sales Executive – Digital Marketing Agency",
    description:
      "We are looking for a dynamic and results-oriented Sales Executive to join our growing digital marketing team.",
    details: [
      "Identify new business opportunities",
      "Pitch services to clients",
      "Build long-term relationships",
    ],
  },
];

export default function OpenRolesSection() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApply, setIsApply] = useState(false);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12" id="all_roles">
      <h3 className="text-center text-3xl md:text-4xl font-bold pb-8">
        Open Roles
      </h3>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-900 to-black border rounded-xl p-6 flex flex-col gap-4 shadow-lg "
          >
            <h4 className="text-xl font-semibold">{job.title}</h4>
            <p className="text-gray-400">{job.description}</p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-auto">
              <button
                className="w-full px-4 py-2 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                onClick={() => {
                  setSelectedJob(job);
                  setIsApply(false);
                }}
              >
                Read More
              </button>
              <button
                className="w-full px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-all"
                onClick={() => {
                  setSelectedJob(job);
                  setIsApply(true);
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-zinc-900 text-white max-w-lg w-full rounded-xl p-6 shadow-xl relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setSelectedJob(null)}
            >
              ✕
            </button>

            {!isApply ? (
              <>
                <h4 className="text-2xl font-bold mb-4">{selectedJob.title}</h4>
                <p className="mb-3 text-gray-300">{selectedJob.description}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {selectedJob.details?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h4 className="text-2xl font-bold mb-4">
                  Apply for {selectedJob.title}
                </h4>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 rounded bg-zinc-800 border border-gray-700"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-2 rounded bg-zinc-800 border border-gray-700"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full p-2 rounded bg-zinc-800 border border-gray-700"
                    required
                  />
                  <input
                    type="file"
                    className="w-full p-2 rounded bg-zinc-800 border border-gray-700"
                    accept=".pdf"
                  />
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full p-2 rounded bg-zinc-800 border border-gray-700"
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-md"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
