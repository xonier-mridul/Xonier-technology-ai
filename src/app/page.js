
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import Technology from "@/components/Technology";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Banner/>
   <Services/>
   <AboutUs/>
   <Technology />
   <Process/>
   <Testimonial/>
   <Technologies/>
   <Team/>
   <Contact/>
   </>
  );
}
