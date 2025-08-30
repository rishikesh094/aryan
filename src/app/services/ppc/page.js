import ContactCTA from "./components/ContactCTA";
import PPCCampaignApproach from "./components/PPCCampaignApproach";
import PPCHero from "./components/PPCHero";
import PPCPlatforms from "./components/PPCPlatforms";
import Testimonials from "./components/Testimonials";

export default function PPCServicesPage() {
  return (
    <>
      <PPCHero />
      <PPCPlatforms />
      <PPCCampaignApproach />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
