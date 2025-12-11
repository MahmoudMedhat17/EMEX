import Hero from "@/pages/StorageService/Hero";
import Description from "@/pages/StorageService/Description";
import Features from "@/pages/StorageService/Features";

const StorageService = () => {
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

export default StorageService;