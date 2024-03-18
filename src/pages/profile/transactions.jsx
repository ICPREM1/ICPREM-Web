import { TbCurrencyNaira } from "react-icons/tb";

const Transactions = () => {
  let NFTCollection = [
    { payment: "NUESA", lvl: "200", amount: "2000", date: "Mar 9, 2024" },
    { payment: "Digitron", lvl: "200", amount: "2500", date: "Mar 9, 2024" },
    { payment: "SUG", lvl: "200", amount: "1000", date: "Mar 9, 2024" },
    { payment: "NUESA", lvl: "100", amount: "4000", date: "Mar 12, 2023" },
    { payment: "Digitron", lvl: "100", amount: "5000", date: "Mar 12, 2023" },
    { payment: "SUG", lvl: "100", amount: "2000", date: "Mar 12, 2023" },
  ];
  return (
    <div className='body lg:mt-10 mt-5'>
      {" "}
      <p className='font-bold text-md lg:text-2xl border-b-4 border-black pb-1 w-fit'>
        Transactions
      </p>
      <div className='mt-5 mb-10'>
        {NFTCollection.map((NFT, index) => (
          <div
            key={index}
            className='flex lg:border-b-2 border-b-[1px] lg:text-base text-xs border-black lg:py-7 py-4 justify-between'
          >
            <div className='basis-1/3'>
              {" "}
              <p>
                {NFT.payment} {NFT.lvl}
              </p>
            </div>

            <div className='basis-1/3 flex justify-center'>
              <p>{NFT.date}</p>
            </div>

            <div className='basis-1/3 flex justify-end'>
              {" "}
              <p className='flex items-center'>
                {" "}
                <TbCurrencyNaira className='lg:size-[1.3rem] size-4' />
                {NFT.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
