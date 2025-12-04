
interface IBenefits {
    heading: string;
    desc: string;
};


const Benefits = ({ heading, desc }: IBenefits) => {
    return (
        <div className="text-end relative p-4 border border-neutralSoftGray hover:border-primaryLight hover:bg-primarySoft duration-500 rounded-2xl">
            <img src="/assets/primeVerified.png" className="absolute right-2 w-8 h-8" />
            <div className="mr-10">
                <h4 className="text-xl font-semibold leading-[150%]">{heading}</h4>
                <p className="text-lg text-neutralDarkGray leading-[200%]">{desc}</p>
            </div>
        </div>
    )
}

export default Benefits;