import { Collapse, initTWE } from "tw-elements";

initTWE({ Collapse });
const Faq = () => {
  return (
    <main className='mt-10'>
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
      <div id='accordionFlushExample' className='py-5 lg:py-10'>
        <div className='rounded-none border-2 border-text my-3 bg-white '>
          <h2 className='mb-0' id='flush-headingOne'>
            <button
              className='group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base font-bold body text-text transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-text [&:not([data-twe-collapse-collapsed])]:shadow-border-b'
              type='button'
              data-twe-collapse-init
              data-twe-target='#flush-collapseOne'
              aria-expanded='false'
              aria-controls='flush-collapseOne'
            >
              Accordion Item 1
              <span className='-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id='flush-collapseOne'
            className='!visible border-0'
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby='flush-headingOne'
            data-twe-parent='#accordionFlushExample'
          >
            <div className='px-5 py-4'>
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the first item's
              accordion body.
            </div>
          </div>
        </div>
        {/* Two */}
        <div className='rounded-none border-2 border-text my-3 bg-white '>
          <h2 className='mb-0' id='flush-headingTwo'>
            <button
              className='group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base font-bold body text-text transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-text [&:not([data-twe-collapse-collapsed])]:shadow-border-b'
              type='button'
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target='#flush-collapseTwo'
              aria-expanded='false'
              aria-controls='flush-collapseTwo'
            >
              Accordion Item 2
              <span className='-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id='flush-collapseTwo'
            className='!visible hidden border-0'
            data-twe-collapse-item
            aria-labelledby='flush-headingTwo'
            data-twe-parent='#accordionFlushExample'
          >
            <div className='px-5 py-4'>
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the second item&apo;s
              accordion body. Let&apo;s imagine this being filled with some
              actual content.
            </div>
          </div>
        </div>
        {/* Three */}
        <div className='rounded-none border-2 border-text my-3 bg-white '>
          <h2 className='mb-0' id='flush-headingThree'>
            <button
              className='group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base font-bold body text-text transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-text [&:not([data-twe-collapse-collapsed])]:shadow-border-b'
              type='button'
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target='#flush-collapseThree'
              aria-expanded='false'
              aria-controls='flush-collapseThree'
            >
              Accordion Item 3
              <span className='-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id='flush-collapseThree'
            className='!visible hidden'
            data-twe-collapse-item
            aria-labelledby='flush-headingThree'
            data-twe-parent='#accordionFlushExample'
          >
            <div className='px-5 py-4'>
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the third item's
              accordion body. Nothing more exciting happening here in terms of
              content, but just filling up the space to make it look, at least
              at first glance, a bit more representative of how this would look
              in a real-world application.
            </div>
          </div>
        </div>

        {/* Four */}
        <div className='rounded-none border-2 border-text my-3 bg-white '>
          <h2 className='mb-0' id='flush-headingFour'>
            <button
              className='group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base font-bold body text-text transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-text [&:not([data-twe-collapse-collapsed])]:shadow-border-b'
              type='button'
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target='#flush-collapseFour'
              aria-expanded='false'
              aria-controls='flush-collapseFour'
            >
              Accordion Item 4
              <span className='-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id='flush-collapseFour'
            className='!visible hidden'
            data-twe-collapse-item
            aria-labelledby='flush-headingFour'
            data-twe-parent='#accordionFlushExample'
          >
            <div className='px-5 py-4'>
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the third item's
              accordion body. Nothing more exciting happening here in terms of
              content, but just filling up the space to make it look, at least
              at first glance, a bit more representative of how this would look
              in a real-world application.
            </div>
          </div>
        </div>

        {/* Five */}
        <div className='rounded-none border-2 border-text my-3 bg-white '>
          <h2 className='mb-0' id='flush-headingFive'>
            <button
              className='group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base font-bold body text-text transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-text [&:not([data-twe-collapse-collapsed])]:shadow-border-b'
              type='button'
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target='#flush-collapseFive'
              aria-expanded='false'
              aria-controls='flush-collapseFive'
            >
              Accordion Item 5
              <span className='-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id='flush-collapseFive'
            className='!visible hidden'
            data-twe-collapse-item
            aria-labelledby='flush-headingFive'
            data-twe-parent='#accordionFlushExample'
          >
            <div className='px-5 py-4'>
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the third item's
              accordion body. Nothing more exciting happening here in terms of
              content, but just filling up the space to make it look, at least
              at first glance, a bit more representative of how this would look
              in a real-world application.
            </div>
          </div>
        </div>
      </div>
      {/*  End*/}
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
