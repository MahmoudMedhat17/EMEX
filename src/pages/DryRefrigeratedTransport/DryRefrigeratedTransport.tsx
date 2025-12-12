import Hero from "@/pages/DryRefrigeratedTransport/Hero";
import Description from "@/pages/DryRefrigeratedTransport/Description";
import Features from "@/pages/DryRefrigeratedTransport/Features";
import HowItWorks from "@/pages/DryRefrigeratedTransport/HowItWorks";
import CommonQuestions from "@/pages/DryRefrigeratedTransport/CommonQuestions";
import ReadyDryRefrigeratedTransport from "@/pages/DryRefrigeratedTransport/ReadyDryRefrigeratedTransport";

const DryRefrigeratedTransport = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Description />
                <Features />
                <HowItWorks />
                <CommonQuestions />
            </div>
            <ReadyDryRefrigeratedTransport />
        </>
    )
}

export default DryRefrigeratedTransport;