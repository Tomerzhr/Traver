import Reviews from "./components/Reviews/Reviews";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import ToursSection from "./components/ToursSection/ToursSection";
import Social from "./components/Discount/Discount";
import WhatWeGive from "./components/WhatWeGive/WhatWeGive";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <WhatWeGive />
      <ToursSection />
      <Reviews />
      <Social />
    </>
  );
}
