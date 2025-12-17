// import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import QuestionCards from '@/components/common/Questions/QuestionCards';
import ObjectConversion from '@/utils/ObjectConversion';


const CommonQuestions = () => {

    // const [accordianOpen, setAccordianOpen] = useState<number | null>(null);

    const { t, i18n } = useTranslation("Contact");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    // Need to make the Accordian opens one question at time only.

    const questionsArray = ObjectConversion(t, "commonQuestions.questions");



    return (
        <section dir={direction} className="py-8 md:py-16">
            <div className="flex flex-col justify-center items-center gap-2.5">
                <p className="bg-primarySoft text-primaryDark py-2 px-4 rounded-lg text-lg w-fit font-semibold smallLineHeight">
                    {t("commonQuestions.header")}
                </p>
                <h2 className="text-[40px] font-semibold text-center midLineHeight">
                    {t("commonQuestions.title")}
                </h2>
                <p className='text-[18px] text-neutralDarkGray text-center highLineHeight'>
                    {t("commonQuestions.desc")}
                </p>
            </div>
            <div className='pt-12 space-y-4 w-full md:w-[700px] lg:w-[821px] mx-auto'>
                {
                    questionsArray.map((ques, index) => (
                        <QuestionCards key={index} question={ques.question} answer={ques.answer} />
                    ))
                }
            </div>
        </section>
    )
}

export default CommonQuestions;