
const Ready = () => {
  return (
    <section className="my-16 bg-ready-section h-[500px] w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-xl md:max-w-2xl mx-auto text-center text-white px-6 md:px-0">
        <h2 className="mb-4 text-[40px] font-semibold smallLineHeight">
          جاهز تبدأ معنا؟
        </h2>
        <p className="mb-7 text-lg highLineHeight">
          إذا كنت بحاجة إلى توصيل شحنة، أو تخليص جمركي، أو حتى حلول تخزين، فريقنا هنا لمساعدتك في كل خطوة. تواصل معنا اليوم لنتحدث عن كيفية تحسين عملياتك اللوجستية
        </p>
        <button className="bg-primaryMain text-white hover:bg-primaryDark duration-500 cursor-pointer p-4 rounded-lg smallLineHeight">
          احجز خدمتك الآن
        </button>
      </div>
    </section>
  )
}

export default Ready;