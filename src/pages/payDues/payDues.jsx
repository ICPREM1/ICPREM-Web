import Navbar from "@/components/navbar";
import { TbCurrencyNaira } from "react-icons/tb";
import pic1 from "@/assets/imCard.svg";
import pic2 from "@/assets/imCard2.svg";
import pic3 from "@/assets/imCard3.svg";
import { useState } from "react";
import { BitfinityNetworkTestnet } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";


const sdk = new ThirdwebSDK(BitfinityNetworkTestnet, {
  clientId: "e0a25b6c78f2fa86cbc44cb1b1f90ed3",
});
const contract = await sdk.getContract("0x8209Ce8F61Ee19ef5CF47fB4f982944b312C9bC8");
const PayDues = () => {
  const [selectedImage, setSelectedImage] = useState(pic1);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case "image1":
        setSelectedImage(pic1);
        break;
      case "image2":
        setSelectedImage(pic2);
        break;

      default:
        setSelectedImage(pic3);
    }
  };
  return (
    <main className='min-h-screen container body mx-auto lg:px-20 px-5'>
      <Navbar />
      <section className='lg:flex lg:mt-20 mt-10 lg:pb-20 pb-10 justify-between'>
        <div className='flex justify-center basis-2/5'>
          {/* <img src={selectedImage} className='md:w-full' alt='' /> */}
          {selectedImage && (
            <img
              src={selectedImage}
              alt='Selected Image'
              className='md:w-full transition-opacity duration-300 ease-in-out'
            />
          )}
        </div>
        {/* Section 2 */}
        <div className='basis-1/2 flex flex-col justify-center lg:mt-0 mt-10'>
          <div>
            <label htmlFor='' className='text-black'>
              Select Due
            </label>

            <select
              onChange={handleChange}
              className='w-full lg:px-8 px-2 py-3 outline-primary lg:py-4 lg:mt-2 lg:mb-10 mb-3 border-2 border-black rounded-lg'
            >
              <option value='image1'>Digitron</option>
              <option value='image2'>NUESA</option>
              <option value='image3'>SUG</option>
            </select>

            {/* Level */}
            <label htmlFor='' className='text-black'>
              Select Level
            </label>
            <select
              onChange={handleChange}
              className='w-full lg:px-8 px-2 py-3 outline-primary lg:py-4 lg:mt-2 border-2 border-black rounded-lg'
            >
              <option value='100'>100LVL</option>
              <option value='200'>200LVL</option>
              <option value='300'>300LVL</option>
              <option value='400'>400LVL</option>
              <option value='500'>500LVL</option>
            </select>
          </div>
          {/* Service */}
          <section className='flex lg:mt-10 mt-5 justify-between'>
            <p className='font-bold'>Service Fee</p>

            <p className='flex items-center'>
              <TbCurrencyNaira className='lg:size-[1.3rem] size-4' />
              10.00
            </p>
          </section>

          {/* Total*/}
          <section className='flex lg:mt-5 mt-2 justify-between'>
            <p className='font-bold'>Total</p>

            <p className='flex items-center'>
              <TbCurrencyNaira className='lg:size-[1.3rem] size-4' />
              2500.00
            </p>
          </section>

          <button className='bg-gradient-to-r from-primary to-secondary mt-5 text-white font-semibold px-8 py-4 w-full rounded-xl'>
            <script
      contractAddress="0x8209Ce8F61Ee19ef5CF47fB4f982944b312C9bC8"
      action={(contract) => {
        contract.mint("Chimbo Udochukwu Enyinnaya", "Electronic Engineering", "400LVL")
      }}
    >
    MINT
    </script>
           
          </button>
        </div>
      </section>
    </main>
  );
};

export default PayDues;
