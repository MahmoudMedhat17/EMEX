import Hero from "@/pages/About/Hero";
import Services from "@/pages/About/Services";
import OurVision from "@/pages/About/OurVision";
import WhyusAbout from "@/pages/About/WhyusAbout";
import ReadyAbout from "@/pages/About/ReadyAbout";

const About = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Services />
                <OurVision />
                <WhyusAbout />
            </div>
            <ReadyAbout />
        </>
    )
}

export default About;