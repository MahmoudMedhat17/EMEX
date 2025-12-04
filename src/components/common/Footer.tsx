/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router";
import { useTranslation } from 'react-i18next';


const Footer = () => {

  const { t, i18n } = useTranslation();


  const isArabic = i18n.language === "ar";

  const direction = isArabic ? "rtl" : "ltr";


  return (
    <footer className="bg-footerColor" dir={direction}>
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:px-[50px] lg:px-[70px] xl:px-[100px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <img src="/assets/footerLogo.png" alt="EMEX-logo" />

            <p className="mt-4 max-w-xs text-neutralWhite">
              {t("footer.desc")}
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link to={"/"}>
                  <img src="/assets/facebook.png" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src="/assets/instagram.png" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src="/assets/twitter.png" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src="/assets/linkedin.png" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-neutralWhite mb-2">
              {t("footer.linkOne")}
            </p>
            <ul className="space-y-4">
              <li className="text-neutralLightGray">
                {t("footer.home")}
              </li>
              <li className="text-neutralLightGray">
                {t("footer.whoWeAre")}
              </li>
              <li className="text-neutralLightGray">
                {t("footer.contact")}
              </li>
            </ul>
          </div>
          <div>
            <p className="text-neutralWhite mb-2">
              {t("footer.linkTwo")}
            </p>
            <ul className="space-y-4">
              <li className="text-neutralLightGray">
                {t("footer.parcelDelivery")}
              </li>
              <li className="text-neutralLightGray">
                {t("footer.dryAndRefrigeratedTransport")}
              </li>
              <li className="text-neutralLightGray">
                {t("footer.storageServices")}
              </li>
              <li className="text-neutralLightGray">
                {t("footer.customsClearance")}
              </li>
            </ul>
          </div>
          <div>
            <p className="text-neutralWhite mb-2">
              {t("footer.linkThree")}
            </p>
            <ul className="space-y-4">
              <li className="text-neutralLightGray flex items-center gap-2">
                <img src="/assets/locationIcon.png" alt="locationIcon" />
                <span>
                  {t("footer.location")}
                </span>
              </li>
              <li className="text-neutralLightGray flex items-center gap-2">
                <img src="/assets/emailIcon.png" alt="emailIcon" />
                <span>
                  {t("footer.email")}
                </span>
              </li>
              <li className="text-neutralLightGray flex items-center gap-2">
                <img src="/assets/phoneIcon.png" alt="phoneIcon" />
                <span>
                  (+966) 596003377
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-primaryMain">
          <p className="text-center text-neutralLightGray mt-9">© 2025 FEMEX Logistics Company. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;