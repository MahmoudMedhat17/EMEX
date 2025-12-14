import Hero from "@/pages/Contact/Hero";
import CommonQuestions from "@/pages/Contact/CommonQuestions";


const Contact = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <CommonQuestions />
            </div>
        </>
    )
}

export default Contact;