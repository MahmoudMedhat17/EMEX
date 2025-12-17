import { servicesData } from "@/data/ServicesData";
import { useTranslation, Trans } from 'react-i18next';
import { Link } from "react-router";


const Services = () => {


  const { t, i18n } = useTranslation("Home");

  const isArabic = i18n.language === "ar" ? "ar" : "en";

  const direction = isArabic ? "rtl" : "ltr";



  let reversedServicesData = servicesData;

  if (isArabic === "ar") {
    const reversedData = [...servicesData];

    for (let i = 0; i < reversedData.length; i += 2) {
      if (i + 1 < reversedData.length) {
        [reversedData[i], reversedData[i + 1]] = [reversedData[i + 1], reversedData[i]];
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reversedServicesData = reversedData;
  }



  return (
    <section id="services" dir={direction} className="py-8 md:py-16">
      <div className="flex flex-col justify-center items-center space-y-4">
        <p className="bg-primarySoft text-primaryDark py-2 px-4 rounded-lg text-lg w-fit font-semibold smallLineHeight">
          {t("services.subHeading")}
        </p>
        <h2 className="text-[40px] font-semibold text-center smallLineHeight">
          <Trans i18nKey={"services.title"} components={{ span: <span className="text-primaryMain" /> }} />
        </h2>
        <p className="font-normal text-lg text-neutralLightGray max-w-[644px] text-center highLineHeight">
          {t("services.desc")}
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-8 md:px-[50px] lg:px-[109px] xl:px-[209px]">
          {
            reversedServicesData.map((data, index) => (
              <div key={index} className="flex flex-col justify-between border border-neutralSoftGray p-4 rounded-2xl h-full">
                <img src={t(data.img)} className="w-full" />
                <div className="space-y-2 mt-6 mb-4">
                  <h4 className={`text-xl font-semibold midLineHeight ${isArabic === "ar" ? "text-right" : "text-left"}`}>{t(data.title)}</h4>
                  <p className={`text-md font-normal text-neutralDarkGray highLineHeight ${isArabic === "ar" ? "text-right" : "text-left"}`}>
                    {t(data.desc)}
                  </p>
                </div>
                <button className="w-full bg-primarySoft text-primaryDark border border-primaryMain hover:bg-primaryDark hover:text-white duration-500 rounded-lg px-4 py-3 cursor-pointer smallLineHeight">
                  <Link to={data.route}>
                    {t(data.btn)}
                  </Link>
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services;