import Hero from "@/pages/ParcelDelivery/Hero";
import Description from "@/pages/ParcelDelivery/Description";
import Features from "@/pages/ParcelDelivery/Features";
import HowItWorks from "@/components/common/HowItWorks/HowItWorks";

const ParcelDelivery = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Description />
                <Features />
                <HowItWorks />
            </div>
        </>
    )
}

export default ParcelDelivery;