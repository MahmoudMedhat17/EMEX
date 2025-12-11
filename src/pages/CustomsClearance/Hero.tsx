import { useTranslation } from 'react-i18next';



const Hero = () => {


    const { t, i18n } = useTranslation("CustomsClearance");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className="relative h-[400px] w-full overflow-hidden">

            <img
                src="/assets/parcelDelivery.png"
                className="absolute inset-0 w-full h-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-black/70 h-[400px]"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-[40px] md:text-[56px] font-bold mb-2 smallLineHeight md:midLineHeight">
                    {t("hero.title")}
                </h1>
                <p className="text-[16px] md:text-[18px] highLineHeight mb-6 text-neutralSoftGray">
                    {t("hero.desc")}
                </p>
                <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer py-4 px-6 rounded-lg smallLineHeight">
                    {t("hero.button")}
                </button>
            </div>
        </section>
    )
}

export default Hero;