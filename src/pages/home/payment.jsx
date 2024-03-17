import blank from "../../assets/Group 23.svg";

const Payment = () => {
  return (
    <main className='bg-gradient-to-br lg:py-32 py:10 text-white container mx-auto lg:px-20 px-5 from-primary to-secondary flex lg:flex-row flex-col'>
      <section className='lg:basis-[55%] lg:mt-0 mt-20 flex relative justify-center items-center basis-full'>
        <img src={blank} className='lg:h-3/5 h-44' alt='' />

        <img
          src={blank}
          className='h-1/4 absolute lg:right-20 -right-2  rotate-[-26.1deg] top-0'
          alt=''
        />

        <img
          src={blank}
          className='h-1/5 absolute lg:right-20 -right-2  rotate-[26.1deg] bottom-0'
          alt=''
        />

        <img
          src={blank}
          className='h-[15%] absolute lg:left-10 left-0 rotate-[164.2deg] top-[50%]'
          alt=''
        />
      </section>

      <section className='lg:basis-[45%] lg:my-0 my-10 basis-full lg:py-20'>
        <p className='font-bold lg:text-left head text-center lg:text-4xl text-3xl lg:leading-normal'>
          Payment Made <br className='md:block hidden' /> Unique
        </p>

        <p className='lg:mt-10 mt-5 text-sm body lg:text-left text-justify leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          dolore? Quod eveniet dignissimos facere ab. Numquam error obcaecati
          modi autem expedita laboriosam ea laudantium, perferendis dicta,
          officia unde ut vitae voluptatibus magnam illo fugit. Commodi saepe
          soluta sed mollitia ullam rem alias numquam fugiat quae nesciunt
          voluptatem consequatur beatae ipsa doloremque quasi, necessitatibus
          minus perspiciatis consequuntur! Magni accusantium assumenda
          aspernatur!
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
