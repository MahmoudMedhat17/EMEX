import { useTranslation } from 'react-i18next';
import FeaturesSection from '@/pages/CustomsClearance/FeaturesSection';

const Features = () => {


    const { t, i18n } = useTranslation("CustomsClearance");

    const isArabic = i18n.language === "ar";

    const direction = isArabic ? "rtl" : "ltr";

    return (
        <section dir={direction} className='pt-16'>
            <FeaturesSection img='/assets/featuresImg.png' Ttitle={t("customsClearanceFeatures.title")} />
        </section>
    )
}

export default Features;