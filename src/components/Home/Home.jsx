import Container from "../container/Container";
import Hero from "./Hero/Hero";
import Stats from "../About/Stats";
import Testimonial from "../About/Testimonial";
import Brand from "./Hero/Brand";
function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <Stats />
      <Testimonial />
    </>
  );
}

export default Home;
