import Approach from "@/components/home/Approach";
import ArchiveCarousel from "@/components/home/ArchiveCarousel";
import BookingQuery from "@/components/home/BookingQuery";
import BookSlot from "@/components/home/BookSlot";
import CapabilitySection from "@/components/home/CapabilitySection";
import Hero from "@/components/home/Hero";
import GrowthPartnerSection from "@/components/home/PartnerSection";
import TechnologyUsed from "@/components/home/TechnologyUsed";
import Testimonials from "@/components/home/Testimonials";
export default function Home() {
  return (
    <>
      <Hero />
      <Approach />
      <BookSlot />
      <GrowthPartnerSection />
      <CapabilitySection />
      <ArchiveCarousel />
      <TechnologyUsed />
    <BookingQuery/>
    <Testimonials/>
    </>
  );
}
