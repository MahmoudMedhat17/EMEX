import { useTranslation } from 'react-i18next';



interface IFeaturesComp {
    icon: string;
    Tdesc: string;
};

const FeaturesComp = ({ icon, Tdesc }: IFeaturesComp) => {

    const { i18n } = useTranslation();

    const isArabic = i18n.language === "ar";


    return (
        <div className="relative">
            <img src={icon} className={`absolute ${isArabic ? "right-0" : "left-0"} w-8 h-8`} />
            <p className={`text-[18px] highLineHeight ${isArabic ? "mr-10" : "ml-10"}`}>{Tdesc}</p>
        </div>
    )
}

export default FeaturesComp