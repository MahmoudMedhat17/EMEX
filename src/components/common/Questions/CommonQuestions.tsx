import { useTranslation } from 'react-i18next';
import QuestionCards from '@/components/common/Questions/QuestionCards';


const CommonQuestions = () => {


    const { t, i18n } = useTranslation("ParcelDelivery");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className="pt-16">
            <div className="flex flex-col justify-center items-center gap-2.5">
                <p className="bg-primarySoft text-primaryDark py-2 px-4 rounded-lg text-lg w-fit font-semibold smallLineHeight">
                    {t("commonQuestions.desc")}
                </p>
                <h2 className="text-[40px] font-semibold text-center smallLineHeight">
                    {t("commonQuestions.title")}
                </h2>
            </div>
            <div className='pt-12 space-y-4 w-fit lg:w-[821px] mx-auto'>
                <QuestionCards question={t("commonQuestions.questions.questionOne.question")} answer={t("commonQuestions.questions.questionOne.answer")} />
                <QuestionCards question={t("commonQuestions.questions.questionTwo.question")} answer={t("commonQuestions.questions.questionTwo.answer")} />
                <QuestionCards question={t("commonQuestions.questions.questionThree.question")} answer={t("commonQuestions.questions.questionThree.answer")} />
                <QuestionCards question={t("commonQuestions.questions.questionFour.question")} answer={t("commonQuestions.questions.questionFour.answer")} />
                <QuestionCards question={t("commonQuestions.questions.questionFive.question")} answer={t("commonQuestions.questions.questionFive.answer")} />
            </div>
        </section>
    )
}

export default CommonQuestions;