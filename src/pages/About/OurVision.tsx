import { useTranslation } from 'react-i18next';


const OurVision = () => {


    const { t, i18n } = useTranslation("About");


    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "lft";

    return (
        <section dir={direction} className="pt-16">
            <div className={`flex flex-col ${isArabic ? "lg:flex-row-reverse" : "lg:flex-row-reverse"}  justify-between items-center gap-12 lg:gap-16 w-full`}>
                <div className="w-full lg:w-1/2">
                    <div className={`flex flex-row items-start xl:items-center justify-between gap-6 mb-6`}>
                        <h3 className="px-4 py-1 bg-primarySoft text-primaryDark font-semibold text-[18px] md:text-[32px] text-center midLineHeight">
                            {t("ourVision.cardTwo.title")}
                        </h3>
                        <p className="text-[16px] highLineHeight">
                            {t("ourVision.cardTwo.desc")}
                        </p>
                    </div>
                    <img src="/assets/visionTwo.png" className="w-full h-[254px] object-center rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className={`flex flex-row items-start xl:items-center gap-6 mb-6`}>
                        <h3 className="px-4 py-1 bg-primarySoft text-primaryDark font-semibold text-[18px] md:text-[32px] text-center midLineHeight">
                            {t("ourVision.cardOne.title")}
                        </h3>
                        <p className="text-[16px] highLineHeight">
                            {t("ourVision.cardOne.desc")}
                        </p>
                    </div>
                    <img src="/assets/visionOne.png" className="w-full h-[254px] object-center rounded-lg" />
                </div>
            </div>
        </section>
    )
}

export default OurVision;