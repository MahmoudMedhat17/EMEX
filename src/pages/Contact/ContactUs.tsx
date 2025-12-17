import { useTranslation } from 'react-i18next';




const ContactUs = () => {


    const { t, i18n } = useTranslation("Contact");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction}>
            <div>
                <h2>اطلب خدمتك الأن </h2>
                <p>املئ لنا بياناتك أو تواصل مباشرة من خلال الطرق المتاحة.</p>
                <form action="">
                    <div>
                        <label htmlFor="الاسم">
                            الاسم
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="البريد الالكتروني">
                            البريد الالكتروني
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="رقم المحمول">
                            رقم المحمول
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="اكتب رسالتك">
                            اكتب رسالتك
                        </label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div>
                        <label htmlFor="نوع الخدمة ( إختياري )">
                            نوع الخدمة ( إختياري )
                        </label>
                    </div>
                    <button>
                        إرسال الطلب
                    </button>
                </form>
            </div>
            <div>
                <img src="/assets/callUs.png" />
                <div>
                    <h3>
                        وسائل تواصل أخرى
                    </h3>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;