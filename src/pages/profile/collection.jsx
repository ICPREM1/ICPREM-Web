import NF from "@/assets/Image card.svg";
import { TbCurrencyNaira } from "react-icons/tb";
import pic1 from "@/assets/imCard.svg"
import pic2 from "@/assets/imCard2.svg";
import pic3 from "@/assets/imCard3.svg";
import { Link } from "react-router-dom";

const Collection = () => {
  let NFTCollection = [
    {
      payment: "NUESA",
      lvl: "100",
      amount: "4000",
      pic: pic1,
    },
    {
      payment: "Digitron",
      lvl: "100",
      amount: "5000",
      pic: pic2,
    },
    {
      payment: "SUG",
      lvl: "100",
      amount: "2000",
      pic: pic3,
    },
    { payment: "NUESA", lvl: "200", amount: "2000", pic: pic1 },
    { payment: "Digitron", lvl: "200", amount: "2500", pic: pic2 },
    { payment: "SUG", lvl: "200", amount: "1000", pic: pic3 },
    { payment: "NUESA", lvl: "300", amount: "2000", pic: pic1 },
    { payment: "Digitron", lvl: "300", amount: "2500", pic: pic2 },
  ];
  return (
    <main className='body lg:mt-10 mt-5'>
      <p className='font-bold text-md lg:text-2xl border-b-4 border-black pb-1 w-fit'>
        Collections
      </p>

      <section className='grid lg:grid-cols-4 grid-cols-2 mt-5 lg:gap-8 gap-4'>
        {NFTCollection.map((NFT, index) => (
          <div key={index} className=''>
            <img src={NFT.pic} className='w-full' alt='' />

            <div className='flex mt-3 lg:text-base text-xs justify-between'>
              <div>
                <span>{NFT.payment}</span>
                <span className='ml-1'>{NFT.lvl}LVL</span>
              </div>

              <span className='flex lg:text-base text-xs items-center'>
                <TbCurrencyNaira className='lg:size-[1.3rem] size-4' />
                {NFT.amount}
              </span>
            </div>
          </div>
        ))}
      </section>

      <div className='flex justify-center mt-5'>
        <Link to={"/payDues"} className='bg-gradient-to-r from-primary to-secondary mt-5 text-white font-semibold px-8 py-3 rounded-xl'>
          Make Payment
        </Link>
      </div>
    </main>
  );
};

export default Collection;
