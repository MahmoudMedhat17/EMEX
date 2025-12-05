import { useTranslation } from 'react-i18next';



const Hero = () => {

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const direction = isArabic ? "rtl" : "ltr";

  return (
    <section className="relative h-screen w-full overflow-hidden" dir={direction}>

      <img
        src="/assets/heroImage.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="
        absolute inset-0 
        flex flex-col items-center 
        justify-center 
        text-center 
        text-white 
        px-6
      ">

        <div className="max-w-4xl flex flex-col justify-center items-center">
          <h1 className="text-[40px] md:text-[56px] font-bold midLineHeight">
            {t("hero.title")}
          </h1>

          <p className="max-w-3xl mt-4 md:mt-6 text-lg font-normal highLineHeight">
            {t("hero.desc")}
          </p>

          <div className="mt-6 md:mt-8 flex items-center justify-center gap-4">
            {
              direction === "rtl" ?
                (
                  <>
                    <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 p-4 rounded-lg font-semibold cursor-pointer smallLineHeight">
                      {t("hero.buttons.buttonRight")}
                    </button>
                    <button className="bg-white border-primaryMain text-primaryDark hover:bg-primaryDark hover:text-white duration-500 p-4 rounded-lg font-semibold cursor-pointer smallLineHeight">
                      {t("hero.buttons.buttonLeft")}
                    </button>
                  </>
                )
                :
                (
                  <>
                    <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 p-4 rounded-lg font-semibold cursor-pointer smallLineHeight">
                      {t("hero.buttons.buttonLeft")}
                    </button>
                    <button className="bg-white border-primaryMain text-primaryDark hover:bg-primaryDark hover:text-white duration-500 p-4 rounded-lg font-semibold cursor-pointer smallLineHeight">
                      {t("hero.buttons.buttonRight")}
                    </button>
                  </>
                )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;