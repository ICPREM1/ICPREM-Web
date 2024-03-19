import pic from "../../assets/Image.svg";
import pic1 from "../../assets/Image1.svg";
import pic2 from "../../assets/Image2.svg";
import pic3 from "../../assets/Image3.svg";

const Payment = () => {
  return (
    <main className='bg-gradient-to-br lg:py-32 py:10 text-white lg:container lg:mx-auto lg:px-20 px-5 from-primary to-secondary flex lg:flex-row flex-col'>
      <section className='lg:basis-[55%] lg:mt-0 mt-20 flex relative justify-center items-center basis-full'>
        <img src={pic} className='lg:h-3/5 h-44' alt='' />

        <img
          src={pic1}
          className='h-1/4 absolute lg:right-20 -right-2 top-0'
          alt=''
        />

        <img
          src={pic3}
          className='h-1/5 absolute lg:right-20 -right-2 bottom-0'
          alt=''
        />

        <img
          src={pic2}
          className='h-[15%] absolute lg:left-10 left-0 rotate-[164.2deg] top-[50%]'
          alt=''
        />
      </section>

      <section className='lg:basis-[45%] lg:my-0 my-10 basis-full lg:py-20'>
        <p className='font-bold lg:text-left head text-center lg:text-4xl text-3xl lg:leading-normal'>
          Payment Made <br className='md:block hidden' /> Unique
        </p>

        <p className='lg:mt-10 mt-5 text-sm lg:text-lg body lg:text-left text-justify leading-relaxed'>
          By using ICP Sahara blockchain for payments, ICPREM deals with issues
          of security and authenticity of payments, while eliminating all
          possibilities of receipt misplacements and forgeries.
        </p>

        <div className='flex lg:justify-start justify-center'>
          <button className='border-[3px] border-white shadow-xl lg:mt-10 mt-5 text-white font-semibold px-8 py-3 rounded-xl'>
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
};

export default Payment;
