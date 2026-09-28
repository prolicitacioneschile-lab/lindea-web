import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Administration from "../components/Administration";
import HowItWorks from "../components/HowItWorks";
import BuyProcess from "../components/BuyProcess";
import Tenants from "../components/Tenants";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Administration />
      <HowItWorks />
      <BuyProcess />
      <Tenants />
      <Faq />
      <Contact />
    </>
  );
}
