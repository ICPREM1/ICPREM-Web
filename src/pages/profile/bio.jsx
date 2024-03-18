import headshot from "@/assets/Ellipse 1.svg";

const Bio = () => {
  return (
    <main className='flex lg:h-64 lg:mt-10 mt-5 body'>
      <div className='basis-1/5 flex justify-center items-center'>
        <img
          src={headshot}
          className='lg:h-2/3 h-18 aspect-square border-2 border-text rounded-full'
          alt=''
        />
      </div>

      <div className='basis-4/5 pl-3 lg:pl-0 flex flex-col justify-center'>
        <p className='font-bold text-md lg:text-4xl'>
          Chimbo Udochukwu Enyinnaya
        </p>
        <p className='lg:mt-5 mt-2 text-xs lg:text-xl'>
          <span className='lg:mr-3 mr-2'>University of Nigeria Nsukka </span>|{" "}
          <span className='lg:mx-3 mx-1'>Electronic Engineering</span> |{" "}
          <span className='lg:mx-3 mx-1'>400LVL</span>
        </p>
      </div>
    </main>
  );
};

export default Bio;
