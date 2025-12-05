import Benefits from "@/components/common/Benefits";


const Whyus = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-4 pt-16 w-full mr-20">
      <div className="order-2 lg:order-1 w-full lg:w-[75%] space-y-4">
        <Benefits heading="فريق متخصص" desc="فريق محترف بخبرة في إدارة الشحن، التخليص الجمركي، والتوزيع" />
        <Benefits heading="أسعار تنافسية" desc="نقدّم أفضل الحلول بأعلى جودة وبأسعار تناسب جميع أنواع الأعمال" />
        <Benefits heading="دعم متواصل" desc="دعم فني وخدمة عملاء على مدار الساعة لمتابعة شحناتك والإجابة على جميع استفساراتك" />
        <Benefits heading="التزام بالمواعيد" desc="نضمن تسليم الشحنات في الوقت المحدد مع متابعة مستمرة طوال الرحلة" />
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-[25%] text-end space-y-2.5">
        <p className="bg-primarySoft text-primaryDark text-lg font-semibold py-2 px-4 inline-block smallLineHeight">
          القيمة المضافة
        </p>
        <h2 className="text-[40px] font-semibold smallLineHeight">
          لماذا تختارنا ؟
        </h2>
        <p className="text-lg text-neutralDarkGray highLineHeight">
          لأن نجاح شحنتك يبدأ من شريك لوجستي يفهم احتياجاتك
        </p>
      </div>
    </section>
  )
}

export default Whyus;