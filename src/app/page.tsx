import Image from "next/image";
import Header from "@/components/sections/header"
import AboutMe from "@/components/sections/about-me";
import WorkAreas from "@/components/sections/work-areas";
import CoreValues from "@/components/sections/core-values";
import SAC from "@/components/sections/sac";
import Instagram from "@/components/sections/instagram";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div>
        <Header/>
        <AboutMe/>
        <WorkAreas/>
        <CoreValues/>
        <SAC/>
        <Instagram/>
        <ContactForm/>
        <Footer/>
    </div>
  );
}
