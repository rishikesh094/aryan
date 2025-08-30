import ContactCTASection from "../smm/components/ContactCTASection";
import HeroSection from "./components/HeroSection";
import OurWork from "./components/OurWork";
import Testimonials from "./components/Testimonials";
import VideoMarketingSection from "./components/VideoMarketingSection";
import VideoServices from "./components/VideoServices";

export default function VideoServicesPage() {
  return (
    <>
      <VideoServices />
      <VideoMarketingSection />
      <OurWork />
      <HeroSection />
      <Testimonials />
      <ContactCTASection />
    </>
  );
}
