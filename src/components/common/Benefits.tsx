
interface IBenefits {
    Theading: string;
    Tdesc: string;
};


const Benefits = ({ Theading, Tdesc }: IBenefits) => {


    return (
        <div className="text-end relative p-4 border border-neutralSoftGray hover:border-primaryLight hover:bg-primarySoft duration-500 rounded-2xl">
            <img src="/assets/primeVerified.png" className="absolute right-2 w-8 h-8" />
            <div className="mr-10">
                <h4 className="text-xl font-semibold midLineHeight">{Theading}</h4>
                <p className="text-lg text-neutralDarkGray highLineHeight">{Tdesc}</p>
            </div>
        </div>
    )
}

export default Benefits;