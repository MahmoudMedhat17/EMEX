import Hero from "@/pages/ParcelDelivery/Hero";
import Description from "@/pages/ParcelDelivery/Description";
import Features from "@/pages/ParcelDelivery/Features";

const ParcelDelivery = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Description />
                <Features />
            </div>
        </>
    )
}

export default ParcelDelivery;