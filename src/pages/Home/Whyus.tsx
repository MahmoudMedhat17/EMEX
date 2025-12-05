import Benefits from "@/components/common/Benefits";
import { useTranslation } from 'react-i18next';


const Whyus = () => {

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const direction = isArabic ? "rtl" : "ltr";

  const cardOnePath = "whyus.benefitCards.cardOne";
  const cardTwoPath = "whyus.benefitCards.cardTwo";
  const cardThreePath = "whyus.benefitCards.cardThree";
  const cardFourPath = "whyus.benefitCards.cardFour";



  return (
    <section dir={direction} className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-4 pt-16 w-full mr-20">
      <div className="order-2 lg:order-1 w-full lg:w-[75%] space-y-4">
        <Benefits Theading={t(`${cardOnePath}.heading`)} Tdesc={t(`${cardOnePath}.desc}`)} />
        <Benefits Theading={t(`${cardTwoPath}.heading`)} Tdesc={t(`${cardTwoPath}.desc`)} />
        <Benefits Theading={t(`${cardThreePath}.heading`)} Tdesc={t(`${cardThreePath}.desc`)} />
        <Benefits Theading={t(`${cardFourPath}.heading`)} Tdesc={t(`${cardFourPath}.desc`)} />
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-[25%] space-y-2.5">
        <p className="bg-primarySoft text-primaryDark text-lg font-semibold py-2 px-4 inline-block smallLineHeight">
          {t("whyus.subHeading")}
        </p>
        <h2 className="text-[40px] font-semibold smallLineHeight">
          {t("whyus.title")}
        </h2>
        <p className="text-lg text-neutralDarkGray highLineHeight">
          {t("whyus.desc")}
        </p>
      </div>
    </section>
  )
}

export default Whyus;