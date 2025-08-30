import SeoAbout from "./components/SeoAbout";
import SeoCTA from "./components/SeoCTA";
import SeoHero from "./components/SeoHero";
import SeoProcess from "./components/SeoProcess";
import SeoServices from "./components/SeoServices";

export default function SEOServicesPage() {
  return (
    <>
      <SeoHero />
      <SeoServices />
      <SeoProcess />
      <SeoAbout />
      <SeoCTA />
    </>
  );
}
