import { useTranslation } from 'react-i18next';
import DescSection from "@/components/common/DescSection";


const Description = () => {

    const { t, i18n } = useTranslation("DryRefrigeratedTransport");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className='py-8 md:py-16'>
            <DescSection img="/assets/dryRefriegratedAndTransportDesc.png" Ttitle={t("dryRefrigeratedTransportDesc.title")} Tdesc={t("dryRefrigeratedTransportDesc.desc")} />
        </section>
    )
}

export default Description;