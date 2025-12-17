import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router';



const About = () => {

  const { t, i18n } = useTranslation("Home");


  const isArabic = i18n.language === "ar";

  const direction = isArabic ? "rtl" : "lft";


  return (
    <section className="py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-[50px] md:gap-[121px]" dir={direction}>
      <div className="flex flex-col space-y-4">
        <p className="bg-primarySoft text-primaryDark text-lg font-semibold py-2 px-4 inline-block smallLineHeight rounded-lg w-fit">
          {t("about.subHeading")}
        </p>
        <h2 className="font-semibold text-[40px] lg:max-w-[400px] midLineHeight">
          <Trans i18nKey={t("about.title")} components={{ span: <span className='text-primaryMain' /> }} />
        </h2>
        <p className="lg:max-w-[400px] text-neutralDarkGray highLineHeight">
          {t("about.desc")}
        </p>
        <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg font-semibold smallLineHeight w-fit">
          <Link to="/about">
            {t("about.buttons.button")}
          </Link>
        </button>
      </div>
      <img src="assets/aboutImage.png" className="lg:w-[50%]" />

    </section>
  )
}

export default About;