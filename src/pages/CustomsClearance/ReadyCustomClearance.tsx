import { useTranslation } from 'react-i18next';




const Ready = () => {

    const { t, i18n } = useTranslation("CustomsClearance");


    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} style={{ "--bgImage": `url("/assets/customsClearanceReady.png")` } as React.CSSProperties} className="my-16 bg-ready-section h-[500px] w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="max-w-xl md:max-w-2xl mx-auto text-center text-white px-6 md:px-0">
                <h2 className="mb-4 text-[40px] font-semibold midLineHeight">
                    {t("readyCustomsClearance.title")}
                </h2>
                <p className="mb-7 text-lg highLineHeight">
                    {t("readyCustomsClearance.desc")}
                </p>
                <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg smallLineHeight">
                    {t("readyCustomsClearance.button")}
                </button>
            </div>
        </section>
    )
}

export default Ready;