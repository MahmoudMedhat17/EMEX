import { aboutServicesData } from "@/data/AboutServicesData";
import { useTranslation } from 'react-i18next';


const Services = () => {


    const { t, i18n } = useTranslation("About");


    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "lft";


    return (
        <section dir={direction} className="pt-16 flex flex-col lg:flex-row-reverse justify-between items-center gap-[60px] lg:gap-[120px]">
            <div className="w-full">
                <img src="/assets/servicesTruck.png" className="rounded-2xl w-full h-[453px] object-cover" />
            </div>
            <div className="flex flex-col lg:max-w-[612px]">
                {
                    isArabic ?
                        (
                            <h2 className="text-[40px] font-semibold smallLineHeight mb-4">
                                نقدم حلول <span className="text-primaryMain">لوجستية حديثة</span> تساعدك تنمّي عملك بثبات
                            </h2>
                        )
                        :
                        (
                            <h2 className="text-[40px] font-semibold smallLineHeight mb-4">
                                We provide logistics solutions to help your <span className="text-primaryMain">business grow</span>
                            </h2>
                        )
                }
                <p className="text-[18px] text-neutralDarkGray highLineHeight mb-4">
                    {t("services.desc")}
                </p>
                <div className="relative space-y-4 mb-6">
                    {
                        aboutServicesData.map((data, index) => (
                            <div key={index}>
                                <img src={data.img} className={`absolute ${isArabic ? "right-0" : "left-0"} right-0 w-6 h-6`} />
                                <p className={`text-[16px] font-medium smallLineHeight ${isArabic ? "mr-8" : "ml-8"}`}>
                                    {t(data.desc)}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg font-semibold smallLineHeight w-fit">
                    {t("services.button")}
                </button>
            </div>
        </section>
    )
}

export default Services;