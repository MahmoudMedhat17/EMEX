import Hero from "@/pages/CustomsClearance/Hero";
import Description from "@/pages/CustomsClearance/Description";
import Features from "@/pages/CustomsClearance/Features";
import HowItWorks from "@/pages/CustomsClearance/HowItWorks";
import CommonQuestions from "@/pages/CustomsClearance/CommonQuestions";
import ReadyCustomsClearance from "@/pages/CustomsClearance/ReadyCustomClearance";

const CustomsClearance = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <Description />
                <Features />
                <HowItWorks />
                <CommonQuestions />
            </div>
            <ReadyCustomsClearance />
        </>
    )
}

export default CustomsClearance;