import { useTranslation } from 'react-i18next';



const About = () => {

  const { t, i18n } = useTranslation("Home");


  const isArabic = i18n.language === "ar";

  const direction = isArabic ? "rtl" : "lft";


  return (
    <section className="py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-[50px] md:gap-[121px]" dir={direction}>
      <div className="flex flex-col space-y-4">
        <p className="text-primaryDark text-lg font-semibold smallLineHeight rounded-lg">
          {t("about.subHeading")}
        </p>
        {
          isArabic ?
            (
              <h2 className="font-semibold text-[40px] lg:max-w-[400px] midLineHeight">
                نقدم حلول <span className="text-primaryMain">لوجستية حديثة</span> تساعدك تنمّي عملك بثبات
              </h2>
            )
            :
            (
              <h2 className="font-semibold text-[40px] lg:max-w-[400px] midLineHeight">
                We provide logistics solutions to help your <span className='text-primaryMain'>business grow</span>
              </h2>
            )
        }
        <p className="lg:max-w-[400px] text-neutralDarkGray highLineHeight">
          {t("about.desc")}
        </p>
        <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg font-semibold smallLineHeight w-fit">
          {t("about.buttons.button")}
        </button>
      </div>
      <img src="assets/aboutImage.png" className="lg:w-[50%]" />

    </section>
  )
}

export default About;