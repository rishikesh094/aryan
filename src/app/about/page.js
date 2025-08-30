import AboutHero from "./components/AboutHero";
import OurClients from "./components/OurClients";
import OurStory from "./components/OurStory";
import Testimonials from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatWeDo />
      <OurStory />
      <WhyChooseUs />
      <Testimonials />
      <OurClients />
    </>
  );
}
