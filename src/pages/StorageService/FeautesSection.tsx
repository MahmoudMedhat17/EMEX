import { Trans, useTranslation } from "react-i18next";
import FeaturesComp from "@/components/common/Features/FeaturesComp";

interface IFeatures {
    img: string;
    Ttitle: string;
}


const FeaturesSection = ({ img, Ttitle }: IFeatures) => {

    const { t } = useTranslation("StorageServices");


    return (
        <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-[50px] md:gap-[121px]">
            <img src={img} className="w-full lg:w-1/2" />
            <div>
                <h2 className="text-[32px] md:text-[40px] font-semibold midLineHeight mb-8">
                    <Trans i18nKey={Ttitle} components={{ span: <span className="text-primaryMain" /> }} />
                </h2>
                <div className="space-y-4">
                    <FeaturesComp icon="/assets/primeVerified.png" Tdesc={t("storageServicesFeatures.desc.descOne")} />
                    <FeaturesComp icon="/assets/primeVerified.png" Tdesc={t("storageServicesFeatures.desc.descTwo")} />
                    <FeaturesComp icon="/assets/primeVerified.png" Tdesc={t("storageServicesFeatures.desc.descThree")} />
                    <FeaturesComp icon="/assets/primeVerified.png" Tdesc={t("storageServicesFeatures.desc.descFour")} />
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;