import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from 'react-i18next';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {

  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  const handleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  const isArabic = i18n.language === "ar";

  const direction = isArabic ? "rtl" : "ltr";



  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-99 w-full" dir={direction}>
      <div className="mx-auto flex items-center justify-between h-16 px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">

        <div className="flex items-center lg:gap-[50px] xl:gap-[88px]">
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" className="w-24" />
          </Link>

          <nav className="hidden md:flex items-center gap-10 w-full relative">
            <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain duration-500 highLineHeight">{t("navbar.home")}</span>
            <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain duration-500 highLineHeight">
              <Link to="/about">
                {t("navbar.about")}
              </Link>
            </span>
            <div className="flex items-center justify-center gap-1.5 h-16 group">
              <div className="absolute top-16 bg-neutralWhite w-fit space-y-4 py-4 px-2 hidden group-hover:block shadow-lg">
                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight">
                  توصيل الطرود
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight">
                  النقل الجاف والمبرد
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight">
                  خدمه التحزين
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight">
                  تخليص جمركي
                </p>
              </div>
              {
                !isArabic ?
                  (
                    <div className="cursor-pointer flex items-center text-neutralLightGray hover:text-primaryMain duration-500">
                      <span className="highLineHeight">{t("navbar.services")}</span>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  )
                  :
                  (
                    <div className="cursor-pointer flex items-center text-neutralLightGray hover:text-primaryMain duration-500">
                      <span className="highLineHeight">{t("navbar.services")}</span>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  )
              }
            </div>
            <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain highLineHeight">{t("navbar.contact")}</span>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="cursor-pointer bg-primaryMain text-white hover:bg-primaryDark duration-500 px-4 py-1.5 rounded-lg smallLineHeight">
            {t("navbar.order")}
          </button>

          <div onClick={handleLanguage} className="flex items-center gap-1 cursor-pointer">
            <span className="highLineHeight">{t("navbar.langSwitch")}</span>
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
          <span className="w-fit block cursor-pointer hover:text-primaryMain duration-500 highLineHeight">{t("navbar.home")}</span>
          <span className="w-fit block cursor-pointer hover:text-primaryMain duration-500 highLineHeight">
            <Link to="/about">
              {t("navbar.about")}
            </Link>
          </span>
          <span className="w-fit block cursor-pointer hover:text-primaryMain duration-500 highLineHeight">{t("navbar.services")}</span>
          <span className="w-fit block cursor-pointer hover:text-primaryMain duration-500 highLineHeight">{t("navbar.contact")}</span>

          <button className="bg-primaryMain text-white px-4 py-2 rounded-lg w-full mt-4 smallLineHeight">
            {t("navbar.order")}
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer mt-2"
            onClick={handleLanguage}
          >
            <img src="/assets/translateIcon.png" alt="translate" className="w-5" />
            <span className="highLineHeight">{t("navbar.langSwitch")}</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
