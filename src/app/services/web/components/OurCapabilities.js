"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const sections = [
  {
    heading: "Website design is thinking made visual",
    description: (
      <>
        <a
          href="https://crezvatic.com/blogdetails/resposive-and-adaptive-website-design"
          className="text-red-600 underline"
        >
          Website Design
        </a>{" "}
        Is Thinking Made Visual—Your Website is the Face of Your Business, It
        Reflects Your Brand and Business. We design websites that help your
        business stand out among your competitors.
      </>
    ),
    provides: [
      "User Interface Design",
      "Graphic Design",
      "User Experience Design",
      "Unique Design",
      "Motion & Animation",
      "Compatible File",
    ],
    technologies: [
      {
        src: "https://crezvatic.com/assets/images/web_services/adobe-sketch.svg",
        title: "Adobe Sketch",
        width: 30,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/after-effect.svg",
        title: "After Effect",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/adobe-illustration.svg",
        title: "Illustration",
        width: 30,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/adobe-xd.svg",
        title: "Adobe XD",
        width: 30,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/adobe-photoshop.svg",
        title: "Photoshop",
        width: 30,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/figma.svg",
        title: "Figma",
        width: 20,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/canva.svg",
        title: "Canva",
        width: 50,
      },
    ],
    image:
      "https://crezvatic.com/assets/images/web_services/Website Design Is Thinking Made-01.webp",
    reverse: false,
  },
  {
    heading: "We build a website that sells",
    description: (
      <>
        Our Interactive and innovative website design will{" "}
        <a
          href="https://crezvatic.com/blogdetails/professional-web-design-service"
          className="text-red-600 underline"
        >
          increase online presence,
        </a>{" "}
        attract visitors, engage them, and keep them on the website for long
        period eventually making them buy your product or service.
      </>
    ),
    provides: [
      "Frontend",
      "Backend",
      "QA Testing",
      "Admin/ CRM Panel",
      "Clean & Customisable Code",
    ],
    technologies: [
      {
        src: "https://crezvatic.com/assets/images/web_services/react.svg",
        title: "React",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/javascript.svg",
        title: "JavaScript",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/wordpress.svg",
        title: "WordPress",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/codeigniter.svg",
        title: "Codeigniter",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/laravel.svg",
        title: "Laravel",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/php.svg",
        title: "PHP",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/mysql.svg",
        title: "MySQL",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/godaddy.svg",
        title: "GoDaddy",
        width: 100,
      },
    ],
    image: "https://crezvatic.com/assets/images/web_services/We Build Website-01.webp",
    reverse: true,
  },
  {
    heading: "We build apps that grow your business",
    description: (
      <>
        Transform your Ideas into reality with{" "}
        <a href="https://crezvatic.com/contact" className="text-red-600 underline">
          Crezvatic.
        </a>{" "}
        We have a Team of Experienced Developers who understand your business
        needs and provide the right web solutions.
      </>
    ),
    provides: [
      "Android/IOS App",
      "Admin/CRM Panel",
      "QA Testing",
      "Clean & Customisable Code",
    ],
    technologies: [
      {
        src: "https://crezvatic.com/assets/images/web_services/react-native.svg",
        title: "React Native",
        width: 80,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/flutter.svg",
        title: "Flutter",
        width: 35,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/android.svg",
        title: "Android",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/swift.svg",
        title: "Swift iOS",
        width: 50,
      },
      {
        src: "https://crezvatic.com/assets/images/web_services/ionic.svg",
        title: "Ionic",
        width: 80,
      },
    ],
    image: "https://crezvatic.com/assets/images/web_services/We Build Apps-01.webp",
    reverse: false,
  },
];

export default function OurCapabilities() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold text-center mb-16"
      >
        Our <span className="text-white">Capabilities</span>
      </motion.h2>

      <div className="flex flex-col gap-24">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: sec.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <Image
                src={sec.image}
                alt={sec.heading}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: sec.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full flex flex-col gap-6"
            >
              <h3 className="text-2xl md:text-3xl font-semibold">
                <span className="text-white">{sec.heading}</span>
              </h3>
              <p className="text-gray-300">{sec.description}</p>

              {/* Provides */}
              <div>
                <h5 className="text-lg font-semibold mb-2">What We Provide</h5>
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {sec.provides.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:bg-[#2a0000] hover:scale-105 transition duration-300"
                    >
                      <Image
                        src="https://crezvatic.com/assets/images/web_services/check-success.svg"
                        alt="check"
                        width={12}
                        height={12}
                      />
                      <p className="m-0 text-sm">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-lg font-semibold mb-2">
                  Technologies We Use
                </h5>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                >
                  {sec.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      title={tech.title}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        show: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.4 }}
                      className="p-2 border border-gray-700 rounded hover:bg-[#2a0000] hover:scale-105 transition duration-300"
                    >
                      <Image
                        src={tech.src}
                        alt={tech.title}
                        width={tech.width}
                        height={tech.width}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Call To Action */}
              {i === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="pt-6 text-center"
                >
                  <a
                    href="https://crezvatic.com/contact"
                    className="inline-block px-6 py-3 border border-white rounded hover:bg-red-700 transition"
                  >
                    Give Us A Call Today
                  </a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
