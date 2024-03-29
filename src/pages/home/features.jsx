import pic from "../../assets/Vector.png";
import lock from "../../assets/lock.svg";
import tick from "../../assets/tick.svg";
import detective from "../../assets/detective.svg";

const Features = () => {
  let reasons = [
    {
      heading: "Security",
      body: "Thanks to the decentralized and immutable nature of blockchain, user data remain protected at all times.",
      img: lock,
    },
    {
      heading: "Authenticity",
      body: "With ICPREM you never have to worry about receipt forgery, as all payments will be authenticated by the blockchain.",
      img: tick,
    },
    {
      heading: "Transparency",
      body: "Thanks to blockchain decentralization, all transactions are recorded, making embezzlement impossible.",
      img: detective,
    },
  ];
  return (
    <main className='lg:mt-20 mt-10'>
      <p className='text-center body font-bold text-lg text-text'>Features</p>

      <p className='text-center font-bold head text-3xl mt-5 lg:text-5xl'>
        Why choose ICPREM?
      </p>

      <section className='flex lg:flex-row flex-col justify-between items-center lg:items-stretch my-10 lg:my-24'>
        {reasons.map((item, index) => (
          <div
            key={index}
            className='basis-[30%] rounded-2xl lg:my-0 lg:py-10 py-5 my-5 flex flex-col lg:w-auto w-[75vw] box items-center'
          >
            <img
              src={item.img}
              alt='card-icon'
              className='lg:h-16 h-12 w-16 lg:w-20 mt-5 lg:mt-8'
            />
            <p className='lg:text-2xl head text-primary text-lg font-semibold mt-5 lg:mt-10'>
              {item.heading}
            </p>
            <p className='text-center body lg:text-base text-sm mt-0 mb-4 lg:mt-5 px-6'>
              {item.body}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Features;
