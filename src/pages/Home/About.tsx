


const About = () => {
  return (
    <div className="py-[92px] flex flex-col lg:flex-row items-center justify-between gap-[50px] md:gap-[121px]">
      <img src="assets/aboutImage.png" className="lg:w-[50%]" />
      <div className="flex flex-col items-end text-end space-y-4">
        <p className="text-primaryDark text-lg font-semibold">
          من نحن
        </p>
        <h2 className="font-semibold text-[40px] lg:max-w-[400px]">
          نقدم حلول <span className="text-primaryMain">لوجستية حديثة</span> تساعدك تنمّي عملك بثبات
        </h2>
        <p className="lg:max-w-[400px] text-neutralDarkGray">
          نحن شركة لوجستية متخصصة في تقديم خدمات متكاملة للشحن والتوزيع وإدارة سلاسل الإمداد. نعمل بخبرة كبيرة في القطاع، ونسعى دائمًا لتوفير حلول عملية وفعّالة تلائم احتياجات عملائنا سواء كانوا أفرادًا أو شركات
        </p>
        <button className="bg-primaryMain text-white cursor-pointer p-4 rounded-lg text-lg font-semibold">
          اعرف المزيد
        </button>
      </div>
    </div>
  )
}

export default About;