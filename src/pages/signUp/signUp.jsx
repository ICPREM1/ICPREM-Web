import leftbubble from "@/assets/Group 68.svg";
import rightbubble from "@/assets/Group 69.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const SignUp = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className='min-h-screen container mx-auto body lg:px-20 px-5 lg:pt-20 pt-10 flex flex-col items-center relative'>
      <div className='lg:w-[40%] w-full relative'>
        <button
          className='absolute right-0 lg:text-base text-xs flex items-center'
          onClick={goBack}
        >
          <IoArrowBack className='lg:size-[1.5rem] size-3' />
          Go Back
        </button>
      </div>
      <img
        src={leftbubble}
        className='fixed left-0 -z-10 top-0 lg:h-[90%] h-32'
        alt=''
      />
      <img
        src={rightbubble}
        className='fixed right-0 bottom-0  -z-10 lg:h-[90%] h-32'
        alt=''
      />
      <p className='lg:text-5xl text-3xl head font-bold'>SignUp</p>

      <div className='lg:mt-10 mt-20 lg:w-[40%] w-full'>
        <label className='block font-bold' htmlFor=''>
          Full Name
        </label>
        <input
          type='text'
          className='rounded-lg lg:py-3 px-3 text-grey outline-primary py-2 w-full border-[1px] border-black'
        />
      </div>

      <div className='lg:mt-5 mt-5 lg:w-[40%] w-full'>
        <label className='block font-bold' htmlFor=''>
          Email
        </label>
        <input
          type='email'
          className='rounded-lg lg:py-3 px-3 text-grey outline-primary py-2 w-full border-[1px] border-black'
        />
      </div>

      <div className='lg:mt-5 mt-5 lg:w-[40%] w-full'>
        <label className='block font-bold' htmlFor=''>
          Password
        </label>
        <input
          type='password'
          minLength={8}
          className='rounded-lg lg:py-3 px-3 text-grey outline-primary py-2 w-full border-[1px] border-black'
        />
      </div>
      <div className='lg:mt-5 mt-5 lg:w-[40%] w-full'>
        <label className='block font-bold' htmlFor=''>
          School
        </label>
        <input
          type='text'
          className='rounded-lg lg:py-3 px-3 text-grey outline-primary py-2 w-full border-[1px] border-black'
        />
      </div>

      <div className='lg:mt-5 mt-5 lg:w-[40%] w-full'>
        <label className='block font-bold' htmlFor=''>
          Level
        </label>
        <input
          type='text'
          inputMode='none'
          minLength={3}
          maxLength={3}
          className='rounded-lg lg:py-3 px-3 text-grey outline-primary py-2 w-full border-[1px] border-black'
        />
      </div>

      <button className='bg-gradient-to-r from-primary to-secondary mt-5 text-white font-semibold px-8 py-3 lg:py-4 lg:w-[40%] w-full rounded-xl'>
        Sign Up
      </button>

      <div className='lg:w-[40%] lg:text-base text-sm w-full mt-3 flex justify-center items-center'>
        <p>Already have an account?</p>
        <Link to={"/login"} className='underline font-bold ml-3'>
          Login
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
