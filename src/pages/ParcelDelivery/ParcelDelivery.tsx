import Hero from "@/pages/ParcelDelivery/Hero";
import Description from "@/pages/ParcelDelivery/Description";
import Features from "@/pages/ParcelDelivery/Features";
import HowItWorks from "@/pages/ParcelDelivery/HowItWorks";
import CommonQuestions from "@/pages/ParcelDelivery/CommonQuestions";
import ReadyParcel from "@/pages/ParcelDelivery/ReadyParcel";

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
            <ReadyParcel />
        </>
    )
}

export default ParcelDelivery;