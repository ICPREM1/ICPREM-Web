import { Collapse, initTWE } from "tw-elements";
import { useState } from "react";

initTWE({ Collapse });
const Faq = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

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
        {[1, 2, 3, 4, 5].map((sectionIndex) => (
          <div key={sectionIndex} className='mb-2 border-text border-2'>
            <button
              className='w-full px-4 border-b-2 border-slate-700 py-4 flex transition-all ease-linear duration-300 justify-between items-center'
              onClick={() => toggleSection(sectionIndex)}
            >
              <span className='text-text'>Section {sectionIndex}</span>
              <svg
                className={`w-6 h-6 ${
                  activeSection === sectionIndex ? "transform rotate-180" : ""
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
              </svg>
            </button>
            {activeSection === sectionIndex && (
              <div className='transition-all ease-linear duration-300 p-4'>
                Content for Section {sectionIndex}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* End */}
      <p className='text-center font-bold head text-xl lg:mt-16 mt-5 lg:text-3xl'>
        Still have a question?
      </p>
      <p className='text text-text lg:text-center text-justify lg:mt-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cumque
        <br className='lg:block hidden' />
        maiores, debitis eaque obcaecati quae odit molestias im deserunt ullam
        suscipit, eveniet sint ipsum.
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
