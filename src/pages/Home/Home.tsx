import Hero from "@/pages/Home/Hero";
import About from "@/pages/Home/About";
import Services from "@/pages/Home/Services";
import Whyus from "@/pages/Home/Whyus";
import Ready from "@/pages/Home/Ready";


const Home = () => {
  return (
    <>
      <Hero />
      <div className="px-6 md:px-[50px] lg:px-[70px] xl:px-[100px]">
        <About />
        <Services />
        <Whyus />
        <Ready />
      </div>
    </>
  )
}

export default Home;