import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useTranslation } from 'react-i18next';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ScrollToTop, NavlinkStyle } from "@/utils/index";


const Navbar = () => {

  const { t, i18n } = useTranslation("Home");
  const [openMenu, setOpenMenu] = useState(false);
  const [mobServices, setMobServices] = useState(false);

  const handleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  const isArabic = i18n.language === "ar";

  const direction = isArabic ? "rtl" : "ltr";

  const handleLinkCloseClick = () => {
    setOpenMenu((prev) => !prev);
  };

  // Need to create an active link in the navbar.

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-99 w-full" dir={direction}>
      <div className="mx-auto flex items-center justify-between h-16 px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">

        <div className="flex items-center lg:gap-[50px] xl:gap-[88px]">
          <Link onClick={ScrollToTop} to="/">
            <img src="/assets/logo.png" alt="logo" className="w-[72px] lg:w-24" />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 w-full relative">
            <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain duration-500 highLineHeight">
              <NavLink to="/" className={NavlinkStyle}>
                {t("navbar.home")}
              </NavLink>
            </span>
            <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain duration-500 highLineHeight">
              <NavLink to="/about" className={NavlinkStyle}>
                {t("navbar.about")}
              </NavLink>
            </span>
            <div className="flex items-center justify-center gap-1.5 h-16 group">
              <div className="absolute top-16 bg-neutralWhite w-1/2 space-y-4 py-4 hidden group-hover:block shadow-lg">
                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full">
                  <NavLink to="/parcelDelivery" className={NavlinkStyle}>
                    {t("navbar.dropDownMenu.parcelDelivery")}
                  </NavLink>
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full">
                  <NavLink to="/dryRefrigeratedTransport" className={NavlinkStyle}>
                    {t("navbar.dropDownMenu.dryRefrigeratedTransport")}
                  </NavLink>
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full">
                  <NavLink to="/storageService" className={NavlinkStyle}>
                    {t("navbar.dropDownMenu.storageService")}
                  </NavLink>
                </p>
                <p className="text-center cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full">
                  <NavLink to="/customsClearance" className={NavlinkStyle}>
                    {t("navbar.dropDownMenu.customsClearance")}
                  </NavLink>
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
            <span className="cursor-pointer text-neutralLightGray hover:text-primaryMain highLineHeight">
              <NavLink to="/contact" className={NavlinkStyle}>
                {t("navbar.contact")}
              </NavLink>
            </span>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="cursor-pointer bg-primaryMain text-white hover:bg-primaryDark duration-500 px-4 py-1.5 rounded-lg smallLineHeight">
            <Link to="/contact">
              {t("navbar.order")}
            </Link>
          </button>

          <div onClick={handleLanguage} className="flex items-center gap-1 cursor-pointer">
            <span className="highLineHeight">{t("navbar.langSwitch")}</span>
            <img src="/assets/translateIcon.png" alt="translate" />
          </div>
        </div>

        <button
          className="block lg:hidden focus:outline-none"
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



      {/* Mobile view */}
      {openMenu && (
        <div className={`lg:hidden px-6 py-4 space-y-4 ${isArabic ? "text-left" : "text-right"}`}>
          <span className="w-fit block cursor-pointer hover:text-primaryMain text-neutralLightGray duration-500 highLineHeight">
            <NavLink to="/" className={NavlinkStyle} onClick={handleLinkCloseClick}>
              {t("navbar.home")}
            </NavLink>
          </span>
          <span className="w-fit block cursor-pointer hover:text-primaryMain text-neutralLightGray duration-500 highLineHeight">
            <NavLink to="/about" className={NavlinkStyle} onClick={handleLinkCloseClick}>
              {t("navbar.about")}
            </NavLink>
          </span>

          <span className=" block cursor-pointer hover:text-primaryMain duration-500 highLineHeight" onClick={() => setMobServices(!mobServices)}>
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
            {
              mobServices && (
                <div onClick={handleLinkCloseClick} className={`w-full block space-y-4 py-4 text-start`}>
                  <p className="cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full p-2">
                    <NavLink to="/parcelDelivery" className={NavlinkStyle}>
                      {t("navbar.dropDownMenu.parcelDelivery")}
                    </NavLink>
                  </p>
                  <p className="cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full p-2">
                    <NavLink to="/dryRefrigeratedTransport" className={NavlinkStyle}>
                      {t("navbar.dropDownMenu.dryRefrigeratedTransport")}
                    </NavLink>
                  </p>
                  <p className="cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full p-2">
                    <NavLink to="/storageService" className={NavlinkStyle}>
                      {t("navbar.dropDownMenu.storageService")}
                    </NavLink>
                  </p>
                  <p className="cursor-pointer text-neutralLightGray highLineHeight hover:bg-primarySoft hover:text-primaryMain duration-400 w-full p-2">
                    <NavLink to="/customsClearance" className={NavlinkStyle}>
                      {t("navbar.dropDownMenu.customsClearance")}
                    </NavLink>
                  </p>
                </div>
              )
            }
          </span>
          <span className="w-fit block cursor-pointer hover:text-primaryMain text-neutralLightGray duration-500 highLineHeight">
            <NavLink to="/contact" className={NavlinkStyle} onClick={handleLinkCloseClick}>
              {t("navbar.contact")}
            </NavLink>
          </span>

          <button className="bg-primaryMain text-white px-4 py-2 rounded-lg w-full mt-4 smallLineHeight">
            <Link to="/contact">
              {t("navbar.order")}
            </Link>
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
