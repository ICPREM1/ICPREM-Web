import pic from "../../assets/Vector.png";
import lock from "../../assets/lock.svg";
import tick from "../../assets/tick.svg";
import detective from "../../assets/detective.svg";

const Features = () => {
  let reasons = [
    {
      heading: "Security",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum voluptatem obcaecati, architecto consequatur nisi soluta obcaecati ipsuma quam ullam eumdicta debitis saepe. Amet, consequatur blanditiis",
      img: lock,
    },
    {
      heading: "Authenticity",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum voluptatem obcaecati, architecto consequatur nisi soluta obcaecati ipsuma quam ullam eumdicta debitis saepe. Amet, consequatur blanditiis",
      img: tick,
    },
    {
      heading: "Transparency",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum voluptatem obcaecati, architecto consequatur nisi soluta obcaecati ipsuma quam ullam eumdicta debitis saepe. Amet, consequatur blanditiis",
      img: detective,
    },
  ];
  return (
    <main>
      <p className='text-center pt-20 body font-bold text-lg text-text'>
        Features
      </p>

      <p className='text-center font-bold head text-3xl mt-5 lg:text-5xl'>
        Why choose ICPREM?
      </p>

      <section className='flex lg:flex-row flex-col justify-between items-center lg:items-stretch my-10 lg:my-24'>
        {reasons.map((item, index) => (
          <div
            key={index}
            className='basis-[30%] rounded-2xl lg:my-0 lg:py-5 my-5 flex flex-col lg:w-auto w-[80vw] box items-center'
          >
            <img
              src={item.img}
              alt='card-icon'
              className='lg:h-16 h-12 w-16 lg:w-20 mt-5 lg:mt-16'
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
