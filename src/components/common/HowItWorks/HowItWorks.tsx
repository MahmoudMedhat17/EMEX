import { useTranslation } from 'react-i18next';
import Card from "@/components/common/HowItWorks/Card";

const HowItWorks = () => {

    const { t, i18n } = useTranslation("ParcelDelivery");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className="pt-16">
            <div className='flex flex-col justify-center items-center gap-2.5'>
                <h2 className="text-[40px] font-semibold smallLineHeight">{t("howItWorks.title")}</h2>
                <p className="text-[18px] text-neutralDarkGray highLineHeight">{t("howItWorks.desc")}</p>
            </div>
            <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                <Card Tnumber={t("howItWorks.Cards.cardOne.number")} Theading={t("howItWorks.Cards.cardOne.heading")} Tdesc={t("howItWorks.Cards.cardOne.desc")} />
                <Card Tnumber={t("howItWorks.Cards.cardTwo.number")} Theading={t("howItWorks.Cards.cardTwo.heading")} Tdesc={t("howItWorks.Cards.cardTwo.desc")} />
                <Card Tnumber={t("howItWorks.Cards.cardThree.number")} Theading={t("howItWorks.Cards.cardThree.heading")} Tdesc={t("howItWorks.Cards.cardThree.desc")} />
                <Card Tnumber={t("howItWorks.Cards.cardFour.number")} Theading={t("howItWorks.Cards.cardFour.heading")} Tdesc={t("howItWorks.Cards.cardFour.desc")} />
            </div>
        </section>
    )
}

export default HowItWorks