import { servicesData } from "@/data/ServicesData";


const Services = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center space-y-4">
        <p className="bg-primarySoft text-primaryDark py-2 px-4 rounded-lg w-fit font-semibold">
          الخدمات
        </p>
        <h2 className="text-[40px] font-semibold text-center">
          حلول <span className="text-primaryMain">متنوعة</span> تلبي احتياجات عملك
        </h2>
        <p className="font-normal text-lg text-neutralLightGray max-w-xl text-center">
          نقدم مجموعة متكاملة من الخدمات اللوجستية المصممة لتسهيل حركة بضائعك وضمان وصولها بأمان وفي الوقت المناسب. اختر الخدمة التي تحتاجها ودع فريقنا يتولى الباقي بكفاءة واحترافية.
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-8 md:px-[50px] lg:px-[109px] xl:px-[209px]">
          {
            servicesData.map((data) => (
              <div className="flex flex-col border border-neutralSoftGray p-4 rounded-2xl h-full">
                <img src={data.img} />
                <div className="space-y-2 mt-6 mb-4">
                  <h4 className="text-end text-3xl font-semibold">{data.title}</h4>
                  <p className="text-xl text-end font-normal text-neutralDarkGray">
                    {data.desc}
                  </p>
                </div>
                <button className="w-full bg-primarySoft text-primaryDark border border-primaryMain hover:bg-primaryDark hover:text-white duration-500 rounded-lg px-4 py-2 cursor-pointer">
                  {data.btn}
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services;