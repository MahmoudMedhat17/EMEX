import Benefits from "@/components/common/Benefits";


const Whyus = () => {
  return (
    <section className="flex justify-center items-start gap-4 pt-16 w-full mr-20">
      <div className="w-[75%] space-y-4">
        <Benefits heading="فريق متخصص" desc="فريق محترف بخبرة في إدارة الشحن، التخليص الجمركي، والتوزيع" />
        <Benefits heading="أسعار تنافسية" desc="نقدّم أفضل الحلول بأعلى جودة وبأسعار تناسب جميع أنواع الأعمال" />
        <Benefits heading="دعم متواصل" desc="دعم فني وخدمة عملاء على مدار الساعة لمتابعة شحناتك والإجابة على جميع استفساراتك" />
        <Benefits heading="التزام بالمواعيد" desc="نضمن تسليم الشحنات في الوقت المحدد مع متابعة مستمرة طوال الرحلة" />
      </div>
      <div className="w-[25%] text-end">
        <p className="text-primaryDark text-lg font-semibold">
          القيمة المضافة
        </p>
        <h2 className="text-[40px] font-semibold">
          لماذا تختارنا ؟
        </h2>
        <p className="text-lg text-neutralDarkGray">
          لأن نجاح شحنتك يبدأ من شريك لوجستي يفهم احتياجاتك
        </p>
      </div>
    </section>
  )
}

export default Whyus;