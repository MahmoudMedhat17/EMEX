


const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <img
        src="/assets/heroImage.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="
        absolute inset-0 
        flex flex-col items-center 
        justify-center 
        text-center 
        text-white 
        px-6
      ">

        <div className="max-w-4xl">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            حلول لوجستية موثوقة تدعم<br />نمو أعمالك
          </h1>

          <p className="max-w-3xl mt-6 text-lg font-normal">
            نحن نضمن لك توصيل سريع ودقيق، مع أمان كامل لشحناتك. نقدم لك تجربة شحن متكاملة تدعم نمو تجارتك محليًا ودوليًا، مما يتيح لك التركيز على تطوير أعمالك دون القلق بشأن الشحن
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="bg-white border-primaryMain text-primaryDark py-3 px-8 rounded-lg font-semibold cursor-pointer">
              تعرف على خدماتنا
            </button>
            <button className="bg-primaryMain text-white py-3 px-8 rounded-lg font-semibold cursor-pointer">
              اطلب خدمتك
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;