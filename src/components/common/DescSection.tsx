import { Trans } from "react-i18next";


interface IDescSection {
    img: string;
    Ttitle: string;
    Tdesc: string;
};


const DescSection = ({ img, Ttitle, Tdesc }: IDescSection) => {
    return (
        <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-[50px] md:gap-[121px]">
            <div className="space-y-4">
                <h2 className="text-[32px] md:text-[40px] font-semibold midLineHeight">
                    <Trans i18nKey={Ttitle} components={{ span: <span className="text-primaryMain" /> }} />
                </h2>
                <p className="text-[16px] md:text-[18px] highLineHeight text-neutralDarkGray">
                    {Tdesc}
                </p>
            </div>
            <img src={img} className="rounded-2xl w-full lg:w-1/2" />
        </section>
    )
}

export default DescSection;