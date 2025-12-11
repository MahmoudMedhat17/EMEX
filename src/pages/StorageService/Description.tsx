import { useTranslation } from 'react-i18next';
import DescSection from "@/components/common/DescSection";


const Description = () => {

    const { t, i18n } = useTranslation("StorageServices");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";


    return (
        <section dir={direction} className='py-8 md:py-16'>
            <DescSection img="/assets/storageServicesDesc.png" Ttitle={t("storageServicesDesc.title")} Tdesc={t("storageServicesDesc.desc")} />
        </section>
    )
}

export default Description;