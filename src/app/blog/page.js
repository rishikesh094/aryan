import Blogs from "./component/Blogs";
import HeroSection from "./component/HeroSection";
import SearchBar from "./component/SearchBar";

export default function BlogPage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <Blogs />
    </>
  );
}
