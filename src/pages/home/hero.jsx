import backdrop from "../../assets/backdrop.svg";
import sponsors from "@/assets/Frame 7.svg";
import sponsor1 from "@/assets/Rectangle 7.svg";
import sponsor2 from "@/assets/Rectangle 5.svg";
import sponsor3 from "@/assets/Rectangle 6.svg";
import sponsor4 from "@/assets/Rectangle 9.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className='flex lg:flex-row lg:pt-20 pt-10 flex-col relative'>
      <section className='lg:basis-[60%] basis-full'>
        <p className='font-bold lg:text-left head text-center lg:text-5xl text-4xl lg:leading-normal'>
          <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Changing
          </span>{" "}
          the way{" "}
          <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            payments
          </span>
          <br className='md:block hidden' /> are made
        </p>

        <p className='lg:mt-10 mt-5 text-sm body lg:text-left text-justify lg:text-lg leading-relaxed'>
          ICPREM is a payment platform that facilitates the payment of
          university dues by issuing digital receipts in the form of NFTs.
          Thanks to this, issues of security and authenticity of payments are
          dealt with.
        </p>

        <div className='flex lg:justify-start justify-center lg:mb-36 mb-20'>
          <Link to={"/payDues"} className='bg-gradient-to-r from-primary to-secondary lg:mt-10 mt-10 text-white font-semibold px-8 lg:py-4 py-3 rounded-xl'>
            Make Payment
          </Link>
        </div>
      </section>

      <section className='lg:basis-[40%] hidden lg:mt-0 mt-40 mb-16 relative isolate basis-full lg:flex justify-center items-center'>
        <img
          src={backdrop}
          className='h-[200px] lg:h-[200%] -z-10 absolute'
          alt=''
        />
      </section>

      {/* <img
        src={sponsors}
        className='left-0 right-0 lg:h-20 mx-auto absolute bottom-0'
        alt=''
      /> */}

      {/* <div className="flex w-full justify-between items-center left-0 right-0 bg-red-400 lg:h-20 mx-auto absolute bottom-0">
        <img src={sponsor1} className="lg:h-full h-8"/>
        <img src={sponsor2} className="lg:h-full h-8"/>
        <img src={sponsor3} className="lg:h-full h-8"/>
        <img src={sponsor4} className="lg:h-full h-8"/>
      </div> */}

      <div className="scroller absolute w-full flex justify-center bottom-0">
        <ul className="flex justify-between lg:justify-around w-full">
          <li><img src={sponsor1} className="lg:h-full h-8"/></li>
          <li><img src={sponsor3} className="lg:h-full h-8"/></li>
          <li><img src={sponsor2} className="lg:h-full h-8"/></li>
          <li><img src={sponsor4} className="lg:h-full h-8"/></li>
        </ul>
      </div>
    </main>
  );
};

export default Hero;
