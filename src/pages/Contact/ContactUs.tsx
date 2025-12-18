import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";



const ContactUs = () => {


    const { i18n } = useTranslation("Contact");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} className='py-8 md:py-16'>
            <div className='flex flex-col md:flex-row justify-between gap-12 md:gap-0h w-full'>
                <div className='w-full'>
                    <h2 className='text-[32px] md:text-[40px] text-neutralBlack font-semibold midLineHeight'>اطلب خدمتك الأن </h2>
                    <p className='text-[18px] text-neutralDarkGray highLineHeight mb-10 md:mb-0'>املئ لنا بياناتك أو تواصل مباشرة من خلال الطرق المتاحة.</p>
                    <form action="" className='space-y-6'>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-[16px] text-neutralDarkGray font-medium smallLineHeight' htmlFor="الاسم">
                                الاسم
                            </label>
                            <input type="text" placeholder='الاسم كامل' className='py-3 border border-neutralSoftGray placeholder:text-[16px] placeholder:text-neutralLightGray placeholder:highLineHeight placeholder:px-4 placeholder:py-3 hover:border-neutralLightGray duration-300 shad-dow-lg focus:outline-2 focus:outline-primaryMain rounded-lg' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-[16px] text-neutralDarkGray font-medium smallLineHeight' htmlFor="البريد الالكتروني">
                                البريد الالكتروني
                            </label>
                            <input type="text" placeholder='example@gmail.com' className='py-3 border border-neutralSoftGray placeholder:text-[16px] placeholder:text-neutralLightGray placeholder:highLineHeight placeholder:px-4 placeholder:py-3 hover:border-neutralLightGray duration-300 shad-dow-lg focus:outline-2 focus:outline-primaryMain rounded-lg' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-[16px] text-neutralDarkGray font-medium smallLineHeight' htmlFor="رقم المحمول">
                                رقم المحمول
                            </label>
                            <input type="text" placeholder='(+966) 123456784' className='py-3 border border-neutralSoftGray placeholder:text-[16px] placeholder:text-neutralLightGray placeholder:highLineHeight placeholder:px-4 placeholder:py-3 hover:border-neutralLightGray duration-300 shad-dow-lg focus:outline-2 focus:outline-primaryMain rounded-lg' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-[16px] text-neutralDarkGray font-medium smallLineHeight' htmlFor="اكتب رسالتك">
                                اكتب رسالتك
                            </label>
                            <textarea rows={8} cols={20} placeholder='احك لنا شوي عن المشروع...' className='resize-none border border-neutralSoftGray placeholder:text-[16px] placeholder:text-neutralLightGray placeholder:highLineHeight placeholder:px-4 placeholder:py-3 hover:border-neutralLightGray duration-300 shad-dow-lg focus:outline-2 focus:outline-primaryMain rounded-lg' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-[16px] text-neutralDarkGray font-medium smallLineHeight' htmlFor="نوع الخدمة ( إختياري )">
                                نوع الخدمة ( إختياري )
                            </label>
                        </div>
                        <button className='text-[16px] font-semibold smallLineHeight w-full bg-primaryMain text-white hover:bg-primaryDark duration-300 rounded-lg p-5 cursor-pointer'>
                            إرسال الطلب
                        </button>
                    </form>
                </div>
                <div className='bg-primarySoft w-full rounded-lg'>
                    <img src="/assets/callUs.png" className='w-full rounded-tl-lg rounded-tr-lg' />
                    <div className='p-6'>
                        <h3 className='text-[32px] font-semibold midLineHeight mb-6'>
                            وسائل تواصل أخرى
                        </h3>
                        <div className='space-y-4 mb-6'>
                            <div className='flex items-center justify-between gap-2 w-fit'>
                                <img src="/assets/contactusEmail.png" />
                                <p className='text-[18px] highLineHeight text-neutralBlack'>info@Femexs.com</p>
                            </div>
                            <div className='flex items-center justify-between gap-2 w-fit'>
                                <img src="/assets/contactusPhone.png" />
                                <p className='text-[18px] highLineHeight text-neutralBlack'> (+966) 596003377</p>
                            </div>
                            <div className='flex items-center justify-between gap-2 w-fit'>
                                <img src="/assets/contactusLocation.png" />
                                <p className='text-[18px] highLineHeight text-neutralBlack'>المملكة العربية السعودية - جدة </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 py-6 border-t border-t-primaryDark'>
                            <FaFacebook className='w-6 h-6 hover:text-primaryMain duration-500' />
                            <FaXTwitter className='w-6 h-6 hover:text-primaryMain duration-500' />
                            <FaInstagram className='w-6 h-6 hover:text-primaryMain duration-500' />
                            <TbBrandLinkedinFilled className='w-6 h-6 hover:text-primaryMain duration-500' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs;