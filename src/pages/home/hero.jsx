import backdrop from "../../assets/backdrop.svg";

const Hero = () => {
  return (
    <main className='flex lg:flex-row lg:pt-20 pt-10 flex-col'>
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

        <p className='lg:mt-10 mt-5 text-sm body lg:text-left text-justify lg:text-base leading-relaxed'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          voluptates ut repudiandae quisquam possimus doloribus vel corporis
          atque officiis dolor rem enim suscipit consectetur fuga nobis mollitia
          minus velit veniam placeat blanditiis quibusdam, dignissimos illo?
          Debitis, architecto quod similique fugiat explicabo quos veritatis
          minima velit commodi doloremque incidunt aut magnam.
        </p>

        <div className='flex lg:justify-start justify-center'>
          <button className='bg-gradient-to-r from-primary to-secondary lg:mt-10 mt-5 text-white font-semibold px-8 py-4 rounded-xl'>
            Make Payment
          </button>
        </div>
      </section>

      <section className='lg:basis-[40%] lg:mt-0 mt-36 mb-16 relative isolate basis-full flex justify-center items-center'>
        <img
          src={backdrop}
          className='h-[200px] lg:h-[200%] -z-10 absolute'
          alt=''
        />
        <div className='bg-gray-500 h-4/5 aspect-square rounded-full'></div>
      </section>
    </main>
  );
};

export default Hero;
