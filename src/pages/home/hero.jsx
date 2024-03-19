import backdrop from "../../assets/backdrop.svg";
import sponsors from "@/assets/Frame 7.svg";

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
          <button className='bg-gradient-to-r from-primary to-secondary lg:mt-10 mt-10 text-white font-semibold px-8 lg:py-4 py-3 rounded-xl'>
            Make Payment
          </button>
        </div>
      </section>

      <section className='lg:basis-[40%] hidden lg:mt-0 mt-40 mb-16 relative isolate basis-full lg:flex justify-center items-center'>
        <img
          src={backdrop}
          className='h-[200px] lg:h-[200%] -z-10 absolute'
          alt=''
        />
      </section>

      <img
        src={sponsors}
        className='left-0 right-0 lg:h-20 mx-auto absolute bottom-0'
        alt=''
      />
    </main>
  );
};

export default Hero;
