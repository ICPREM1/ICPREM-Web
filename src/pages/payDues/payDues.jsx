import Navbar from "@/components/navbar";
import NF from "@/assets/Image card.svg";

const PayDues = () => {
  return (
    <main className='min-h-screen container mx-auto lg:px-20 px-5'>
      <Navbar />
      <section className='lg:flex lg:mt-20 mt-10 justify-between'>
        <div className='flex justify-center basis-2/5'>
          <img src={NF} alt='' />
        </div>

        <div className='basis-1/2'>
          <button className='bg-gradient-to-r from-primary to-secondary mt-5 text-white font-semibold px-8 py-4 w-full rounded-xl'>
            Mint
          </button>
        </div>
      </section>
    </main>
  );
};

export default PayDues;
