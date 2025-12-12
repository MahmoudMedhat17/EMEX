import Hero from "@/pages/StorageService/Hero";
import Description from "@/pages/StorageService/Description";
import Features from "@/pages/StorageService/Features";
import HowItWorks from "@/pages/StorageService/HowItWorks";
import CommonQuestions from "@/pages/StorageService/CommonQuestions";
import ReadyStorageService from "@/pages/StorageService/ReadyStorageService";

const StorageService = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Description />
                <Features />
                <HowItWorks />
                <CommonQuestions />
            </div>
            <ReadyStorageService />
        </>
    )
}

export default StorageService;