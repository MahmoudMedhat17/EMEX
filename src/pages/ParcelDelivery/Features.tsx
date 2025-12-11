import { useTranslation } from 'react-i18next';
import FeaturesSection from '@/pages/ParcelDelivery/FeaturesSection';

const Features = () => {


    const { t, i18n } = useTranslation("ParcelDelivery");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} className='py-8 md:py-16'>
            <FeaturesSection img='/assets/featuresImg.png' Ttitle={t("parcelFeatures.title")} />
        </section>
    )
}

export default Features;