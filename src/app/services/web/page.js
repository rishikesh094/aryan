import OurCapabilities from "./components/OurCapabilities";
import ServicesSection from "./components/ServicesSection";
import StillConfused from "./components/StillConfused";
import WebHeroSection from "./components/WebHeroSection";
import WebServiceFeatures from "./components/WebServiceFeatures";
import WhyChooseUs from "./components/WhyChooseUs";

export default function WebServicesPage() {
  return (
    <>
      <WebHeroSection />
      <ServicesSection />
      <WebServiceFeatures />
      <OurCapabilities />
      <WhyChooseUs />
      <StillConfused />
    </>
  );
}
