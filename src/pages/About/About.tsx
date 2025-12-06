import AboutHero from "@/pages/About/AboutHero";
import Services from "@/pages/About/Services";
import OurVision from "@/pages/About/OurVision";

const About = () => {
    return (
        <>
            <AboutHero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Services />
                <OurVision />
            </div>
        </>
    )
}

export default About;