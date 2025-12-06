import { useTranslation } from 'react-i18next';


const OurVision = () => {


    const { t, i18n } = useTranslation("About");


    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "lft";

    return (
        <section dir={direction} className="pt-16">
            <div className={`flex flex-col ${isArabic ? "lg:flex-row" : "lg:flex-row-reverse"}  justify-between items-center gap-12 lg:gap-16 w-full`}>
                <div className="w-full lg:w-1/2">
                    <div className={`flex flex-row items-start xl:items-center justify-between gap-6 mb-6`}>
                        <h3 className="px-4 py-1 bg-primarySoft text-primaryDark font-semibold text-[32px] midLineHeight">
                            {t("ourVision.cardTwo.title")}
                        </h3>
                        {
                            isArabic ?
                                (
                                    <p className="text-[18px] highLineHeight">
                                        أن نصبح الشريك اللوجستي الأكثر ثقة في المنطقة، عبر بناء منظومة <span className="text-primaryMain">خدمات حديثة</span> تعتمد على التقنية وتضع العميل في قلب كل قرار
                                    </p>
                                )
                                :
                                (
                                    <p className="text-[18px] highLineHeight">
                                        We aim to be the region's most trusted logistics partner by developing a modern service system that uses technology and focuses on customer needs.
                                    </p>
                                )
                        }
                    </div>
                    <img src="/assets/visionTwo.png" className="w-full h-[254px] object-center rounded-lg" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className={`flex flex-row items-start xl:items-center gap-6 mb-6`}>
                        <h3 className="px-4 py-1 bg-primarySoft text-primaryDark font-semibold text-[32px] midLineHeight">
                            {t("ourVision.cardOne.title")}
                        </h3>
                        {
                            isArabic ?
                                (
                                    <p className="text-[18px] highLineHeight">
                                        تمكين الأفراد والشركات من إدارة عملياتهم اللوجستية <span className="text-primaryMain">بسهولة وأمان</span>، عبر حلول عملية وموثوقة تُلائم احتياجاتهم المتغيّرة
                                    </p>
                                )
                                :
                                (
                                    <p className="text-[18px] highLineHeight">
                                        Helping individuals and companies manage logistics operations easily and safely with practical, reliable solutions that adapt to their needs.
                                    </p>
                                )
                        }
                    </div>
                    <img src="/assets/visionOne.png" className="w-full h-[254px] object-center rounded-lg" />
                </div>
            </div>
        </section>
    )
}

export default OurVision;