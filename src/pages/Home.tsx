import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import About from "../components/home/About";
import FeaturedRooms from "../components/home/FeaturedRooms";
import Experiences from "../components/home/Experiences";
import Dining from "../components/home/Dining";
import Gallery from "../components/home/Gallery";
import CtaBanner from "../components/home/CtaBanner";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <FeaturedRooms />
      <Experiences />
      <Dining />
      <Gallery />
      <CtaBanner />
      <Testimonials />
    </>
  );
}
