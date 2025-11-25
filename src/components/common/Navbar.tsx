import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from 'react-i18next';


const Navbar = () => {

  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  const handleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  const isArabic = i18n.language === "ar";


  return (
    <header className="bg-white shadow" dir={`${isArabic ? "ltr" : "rtl"}`}>
      <div className="mx-auto flex items-center justify-between h-16 px-6 md:px-[100px]">

        <div className="flex items-center lg:gap-[50px] xl:gap-[88px]">
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" className="w-24" />
          </Link>

          <nav className="hidden md:flex items-center gap-10 w-full relative">
            <span className="cursor-pointer text-neutralLightGray">{t("home")}</span>
            <span className="cursor-pointer text-neutralLightGray">{t("about")}</span>
            <div className="flex items-center justify-center gap-1.5 h-16 group">
              <div className="absolute top-16 bg-neutralWhite w-fit space-y-4 py-4 px-2 hidden group-hover:block shadow-lg">
                <p className="text-center cursor-pointer text-neutralLightGray">
                  توصيل الطرود
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray">
                  النقل الجاف والمبرد
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray">
                  خدمه التحزين
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray">
                  تخليص جمركي
                </p>
              </div>
              {
                !isArabic ?
                  (
                    <>
                      <span className="cursor-pointer text-neutralLightGray">{t("services")}</span>
                      <img src="/assets/arrowDown.png" className="cursor-pointer" />
                    </>
                  )
                  :
                  (
                    <>
                      <span className="cursor-pointer text-neutralLightGray">{t("services")}</span>
                      <img src="/assets/arrowDown.png" className="cursor-pointer" />
                    </>
                  )
              }
            </div>
            <span className="cursor-pointer text-neutralLightGray">{t("contact")}</span>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="cursor-pointer bg-primaryMain text-white px-4 py-1.5 rounded-lg">
            {t("order")}
          </button>

          <div onClick={handleLanguage} className="flex items-center gap-1 cursor-pointer">
            <span>{t("langSwitch")}</span>
            <img src="/assets/translateIcon.png" alt="translate" />
          </div>
        </div>

        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {openMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {openMenu && (
        <div className={`md:hidden px-6 py-4 space-y-4 ${isArabic ? "text-left" : "text-right"}`}>
          <span className="block cursor-pointer">{t("home")}</span>
          <span className="block cursor-pointer">{t("about")}</span>
          <span className="block cursor-pointer">{t("services")}</span>
          <span className="block cursor-pointer">{t("contact us")}</span>

          <button className="bg-primaryMain text-white px-4 py-2 rounded-lg w-full mt-4">
            {t("order")}
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer mt-2"
            onClick={handleLanguage}
          >
            <img src="/assets/translateIcon.png" alt="translate" className="w-5" />
            <span>{t("langSwitch")}</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
