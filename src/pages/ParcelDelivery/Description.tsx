import { useTranslation } from 'react-i18next';
import DescSection from "@/components/common/DescSection";


const Description = () => {

    const { t, i18n } = useTranslation("ParcelDelivery");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className='pt-16'>
            <DescSection img="/assets/parcelDesc.png" Ttitle={t("parcelDesc.title")} Tdesc={t("parcelDesc.desc")} />
        </section>
    )
}

export default Description;