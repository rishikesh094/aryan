import ContactUs from "./components/ContactUs";
import Keypoints from "./components/Keypoints";
import RecentWork from "./components/RecentWork";
import SMMHero from "./components/SMMHero";
import StrategySection from "./components/StrategySection";
import Testimonials from "./components/Testimonials";
import WhyInvest from "./components/WhyInvest";

export default function SMMServicesPage() {
  return (
    <>
      <SMMHero />
      <Keypoints />
      <WhyInvest />
      <StrategySection />
      <RecentWork />
      <Testimonials />
      <ContactUs />
    </>
  );
}
