import Hero from "@/pages/Contact/Hero";
import CommonQuestions from "@/pages/Contact/CommonQuestions";
import ContactUs from "@/pages/Contact/ContactUs";

const Contact = () => {
    return (
        <>
            <Hero />
            <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
                <ContactUs />
                <CommonQuestions />
            </div>
        </>
    )
}

export default Contact;