import leftbubble from "@/assets/Group 68.svg";
import rightbubble from "@/assets/Group 69.svg";

const SignUp = () => {
  return (
    <main className='min-h-screen container mx-auto body lg:px-20 px-5 lg:pt-20 pt-10 flex flex-col items-center relative'>
      <img
        src={leftbubble}
        className='fixed left-0 top-0 lg:h-[90%] h-32'
        alt=''
      />
      <img
        src={rightbubble}
        className='fixed right-0 bottom-0 lg:h-[90%] h-32'
        alt=''
      />
      <p className='lg:text-5xl text-3xl head font-bold'>SignUp</p>

      <div className='mt-10 lg:w-[40%] w-full'>
        <label className='block' htmlFor=''>
          Full Name
        </label>
        <input type='text' className='rounded-lg lg:py-4 py-2 w-full lg:mt-3 border-2 border-black' />
      </div>
    </main>
  );
};

export default SignUp;
