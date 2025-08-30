import WebServices from "./web/page";
import SEOServices from "./seo/page";
import SMMServices from "./smm/page";
import PPCServices from "./ppc/page";
import VideoServices from "./video/page";

export default function ServicesPage() {
  return (
    <>
      <WebServices />
      <SEOServices />
      <SMMServices />
      <PPCServices />
      <VideoServices />
    </>
  );
}
