import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isRTL, setIsRTL] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-white shadow" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mx-auto flex items-center justify-between h-16 px-6 md:px-16">

        <Link to="/">
          <img src="/assets/logo.png" alt="logo" className="w-24" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <span className="cursor-pointer">الصفحة الرئيسية</span>
          <span className="cursor-pointer">من نحن</span>
          <span className="cursor-pointer">خدماتنا</span>
          <span className="cursor-pointer">تواصل معنا</span>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button className="cursor-pointer bg-primaryMain text-white px-4 py-1.5 rounded-lg">
            اطلب خدمتك
          </button>

          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setIsRTL(!isRTL)}
          >
            <img src="/assets/translateIcon.png" alt="translate" />
            <span>{isRTL ? "English" : "العربية"}</span>
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
        <div className={`md:hidden px-6 py-4 space-y-4 ${isRTL ? "text-right" : "text-left"}`}>
          <span className="block cursor-pointer">الصفحة الرئيسية</span>
          <span className="block cursor-pointer">من نحن</span>
          <span className="block cursor-pointer">خدماتنا</span>
          <span className="block cursor-pointer">تواصل معنا</span>

          <button className="bg-primaryMain text-white px-4 py-2 rounded-lg w-full mt-4">
            اطلب خدمتك
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer mt-2"
            onClick={() => setIsRTL(!isRTL)}
          >
            <img src="/assets/translateIcon.png" alt="translate" className="w-5" />
            <span>{isRTL ? "English" : "Arabic"}</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
