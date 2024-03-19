import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const Faq = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  let faqs = [
    {
      title:
        "What is an NFT receipt, and how does it differ from a traditional receipt?",
      response:
        "An NFT receipt is a non-fungible token that serves as proof of a transaction on the blockchain. Unlike traditional receipts, which are often paper-based or digital documents, NFT receipts are unique, cannot be duplicated, and are stored securely on the blockchain.",
      index: 1,
    },

    {
      title:
        "Can I view and manage my NFT receipts within the app? How user-friendly is this process?",
      response:
        "Yes. you can easily view and manage your NFT receipts within the app. The app provides a user-friendly interface where you can access all your NFT receipts, view transaction details, and even organize them based on different categories or filters",
      index: 2,
    },

    {
      title:
        "Are there any additional benefits or rewards associated with receiving NFT receipts through the app?",
      response:
        "In addition to serving as proof Of transaction, receiving NFT receipts through the app may come with extra benefits or rewards. For example. you might be eligible for exclusive discounts, loyalty points or access to special events or promotions",
      index: 3,
    },

    {
      title:
        "How secure are NFT receipts in terms of authenticity and proof of transaction?",
      response:
        "NFT receipts are highly Secure in terms Of authenticity and proof of transaction. Each NFT receipt is uniquely generated and recorded on the blockchain, making it tamper-proof and verifiable. This ensures that the receipt cannot be forged or altered. providing a high level Of trust and transparency.",
      index: 4,
    },

    {
      title:
        "Can I trade or sell my NFT receipts on external platforms, or are they exclusively stored within the app?",
      response:
        "While your NFT receipts are stored securely within the app. you may have the option to trade or sell them on external platforms that support NFT trading. This allows you to potentially monetize your receipts or engage in NFT-based activities outside of the app ecosystem, However, it's essential to verify the cotnpatibility and terms of such external platforms before proceeding With any transactions",

      index: 5,
    },
  ];

  return (
    <main className='mt-10 body'>
      {" "}
      <p className='text-center font-bold head text-3xl lg:mt-24 mt-5 lg:text-5xl'>
        FAQs
      </p>
      <p className='text text-text lg:text-center text-justify lg:mt-10 mt-2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cumque
        <br className='lg:block hidden' />
        maiores, debitis eaque obcaecati quae odit molestias im deserunt ullam
        suscipit, eveniet sint ipsum.
      </p>
      {/* Accordion */}
      <div className='lg:mx-20 mt-5 '>
        {faqs.map((section) => (
          <div
            key={section.index}
            className='lg:mb-5 mb-3 rounded-xl overflow-x-hidden lg:text-base text-sm border-text border-2'
          >
            <button
              className='w-full lg:px-4 px-1 border-b-2 border-slate-700 lg:py-4 py-2 flex transition-all ease-linear duration-300 justify-between items-center'
              onClick={() => toggleSection(section.index)}
            >
              <span className='text-text'>{section.title}</span>
              {/* <svg
                className={`w-6 h-6 ${
                  activeSection === section.index ? "transform rotate-180" : ""
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg> */}

              <FiPlus
                className={` lg:size-[1.3rem] size-4 ${
                  activeSection === section.index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {activeSection === section.index && (
              <div className='transition-all ease-linear duration-300 p-4'>
                {section.response}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* End */}
      <p className='text-center font-bold head text-xl lg:mt-16 mt-10 lg:text-3xl'>
        Still have a question?
      </p>
      <p className='text text-text lg:text-center text-justify lg:mt-5'>
        Reach out to us on our social media platforms.
      </p>
      <div className='flex justify-center lg:mb-20 mb-10'>
        <button className='bg-gradient-to-r from-primary to-secondary mt-5 text-white font-semibold px-8 py-3 rounded-xl'>
          Contact
        </button>
      </div>
    </main>
  );
};

export default Faq;
