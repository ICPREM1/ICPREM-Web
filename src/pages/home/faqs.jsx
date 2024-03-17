const Faq = () => {
  return (
    <main className='mt-10 min-h-[80vh]'>
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
      <p className='text-center font-bold head text-xl lg:mt-24 mt-5 lg:text-3xl'>
        Still have a question?
      </p>
      <p className='text text-text lg:text-center text-justify lg:mt-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cumque
        <br className='lg:block hidden' />
        maiores, debitis eaque obcaecati quae odit molestias im deserunt ullam
        suscipit, eveniet sint ipsum.
      </p>
      <div className='flex justify-center'>
        <button className='bg-gradient-to-r from-primary to-secondary mt-5 text-white font-semibold px-8 py-3 rounded-xl'>
          Contact
        </button>
      </div>
    </main>
  );
};

export default Faq;
