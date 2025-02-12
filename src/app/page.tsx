import Image from "next/image";
import Header from "./components/sections/header/header";
import AboutMe from "./components/sections/about-me/about-me";
import WorkAreas from "./components/sections/work-areas/work-areas";
import CoreValues from "./components/sections/core-values/core-values";
import SAC from "./components/sections/sac/sac";
import Instagram from "./components/sections/instagram/instagram";
import ContactForm from "./components/sections/contact-form/contact-form";
import Footer from "./components/sections/footer/footer";

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
