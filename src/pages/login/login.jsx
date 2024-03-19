import leftbubble from "@/assets/Group 68.svg";
import rightbubble from "@/assets/Group 69.svg";
import apple from "@/assets/Apple.svg";
import facebook from "@/assets/facebook1.svg";
import google from "@/assets/google.svg";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className='min-h-screen container mx-auto body lg:px-20 px-5 lg:pt-20 py-10 flex flex-col items-center relative'>
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
        className='fixed right-0 bottom-0 lg:h-[90%] h-32'
        alt=''
      />
      <p className='lg:text-5xl text-3xl head font-bold'>Login</p>

      {/* Form */}

      <div className='lg:mt-10 mt-20 lg:w-[40%] w-full'>
        <input
          type='email'
          placeholder='Email'
          className='rounded-lg lg:py-3 px-3 text-grey outline-primary py-2 w-full lg:mt-3 border-[1px] border-black'
        />
      </div>

      <div className='mt-5 lg:w-[40%] w-full'>
        <input
          type='Password'
          placeholder='Password'
          className='rounded-lg lg:py-3 px-3 text-grey outline-primary py-2 w-full lg:mt-3 border-[1px] border-black'
        />
      </div>

      <button className='bg-gradient-to-r from-primary to-secondary mt-5 text-white font-semibold px-8 py-3 lg:py-4 lg:w-[40%] w-full rounded-xl'>
        Login
      </button>

      <hr className='bg-black h-[1px] border-0 my-8 lg:w-[40%] w-full' />

      <button className='bg-white text-black border-[1px] border-black font-semibold px-8 py-3 lg:py-4 flex items-center justify-center lg:w-[40%] w-full rounded-xl'>
        <img src={google} className='mr-2' alt='' />
        Login with Google
      </button>

      <button className='bg-white mt-5 text-black border-[1px] border-black font-semibold px-8 py-3 lg:py-4 flex items-center justify-center lg:w-[40%] w-full rounded-xl'>
        <img src={facebook} alt='' />
        Login with Facebook
      </button>

      <button className='bg-white mt-5 text-black border-[1px] border-black font-semibold px-8 py-3 lg:py-4 flex items-center justify-center lg:w-[40%] w-full rounded-xl'>
        <img src={apple} className='mr-2' alt='' />
        Login with Apple
      </button>

      <div className='lg:w-[40%] lg:text-base text-sm w-full mt-3 flex justify-center items-center'>
        <p>Don&apos;t have an account?</p>
        <Link to={"/SignUp"} className='underline font-bold ml-3'>
          Sign Up
        </Link>
      </div>
    </main>
  );
};

export default Login;
