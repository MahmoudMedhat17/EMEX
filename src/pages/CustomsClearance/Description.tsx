import { useTranslation } from 'react-i18next';
import DescSection from "@/components/common/DescSection";


const Description = () => {

    const { t, i18n } = useTranslation("CustomsClearance");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className='py-16'>
            <DescSection img="/assets/customsClearanceAbout.png" Ttitle={t("customsClearanceDesc.title")} Tdesc={t("customsClearanceDesc.desc")} />
        </section>
    )
}

export default Description;