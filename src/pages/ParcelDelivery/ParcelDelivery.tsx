import Hero from "@/pages/ParcelDelivery/Hero";
import Description from "@/pages/ParcelDelivery/Description";
import Features from "@/pages/ParcelDelivery/Features";
import HowItWorks from "@/components/common/HowItWorks/HowItWorks";
import CommonQuestions from "@/components/common/Questions/CommonQuestions";

const ParcelDelivery = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Description />
                <Features />
                <HowItWorks />
                <CommonQuestions />
            </div>
        </>
    )
}

export default ParcelDelivery;