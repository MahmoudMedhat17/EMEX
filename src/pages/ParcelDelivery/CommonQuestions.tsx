import { useTranslation } from 'react-i18next';
import QuestionCards from '@/components/common/Questions/QuestionCards';
import ObjectConversion from '@/utils/ObjectConversion';
import useAccordian from '@/utils/useAccordian';
import { type TQuestions } from '@/utils/types';

const CommonQuestions = () => {


    const { t, i18n } = useTranslation("ParcelDelivery");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    const questionArray = ObjectConversion(t, "commonQuestions.questions");

    const { isOpen, onAccordianActive } = useAccordian();


    return (
        <section dir={direction} className="py-8 md:py-16">
            <div className="flex flex-col justify-center items-center gap-2.5">
                <p className="bg-primarySoft text-primaryDark py-2 px-4 rounded-lg text-lg w-fit font-semibold smallLineHeight">
                    {t("commonQuestions.desc")}
                </p>
                <h2 className="text-[40px] font-semibold text-center midLineHeight">
                    {t("commonQuestions.title")}
                </h2>
            </div>
            <div className='pt-12 space-y-4 w-full md:w-[700px] lg:w-[821px] mx-auto'>
                {
                    questionArray.map((ques: TQuestions, index) => (
                        <QuestionCards key={index} question={ques.question} answer={ques.answer} isOpen={isOpen(index)} onAccordianActive={() => onAccordianActive(index)} />
                    ))
                }
            </div>
        </section>
    )
}

export default CommonQuestions;