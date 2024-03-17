import { Link } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  let menuItems = [
    { title: "Home", to: "/", icon: "" },
    { title: "Pay Due", to: "/", icon: "" },
    { title: "Profile", to: "/", icon: "" },
  ];

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className='flex items-center lg:h-24 h-16 lg:pt-5 lg:border-0 border-primary border-b-[1px]'>
      <section className='lg:basis-1/4 basis-1/2'>
        <p className='font-bold text-3xl head'>Logo</p>
      </section>
      <section className='basis-1/2 justify-center lg:flex hidden'>
        {menuItems.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className='mx-8 text-lg body font-semibold text-grey'
          >
            {item.title}
          </Link>
        ))}
      </section>
      <section className='basis-1/4 lg:flex hidden justify-end'>
        {/* <button className='bg-gradient-to-r body from-primary to-secondary  text-white font-bold px-8 py-4 rounded-xl'>
          Connect Wallet
        </button> */}

        <button className='bg-gradient-to-r from-primary to-secondary mx-5 text-primary font-semibold px-0 py-0 rounded-xl'>
          <span className='bg-white rounded-lg py-2 m-1 px-6'>Login</span>
        </button>

        <button className='bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-xl'>
          Sign Up
        </button>
      </section>
      {/* Mobile Menu For Responsive View */}
      <section className='flex lg:hidden  basis-1/2 justify-end'>
        <TbMenuDeep
          size={"2.2rem"}
          onClick={() => setMobileMenu(true)}
          className='text-text'
        />
      </section>
      <div
        className={`w-9/12 bg-gradient-to-tr from-primary to-secondary  transition-all duration-200 ease-linear h-screen lg:hidden block z-20 fixed px-5 pt-5 left-0 top-0 ${
          mobileMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className='flex justify-between'>
          <p className='font-bold text-3xl head text-white'>Logo</p>

          <IoClose
            size={"2.3rem"}
            className='text-white'
            onClick={() => setMobileMenu(false)}
          />
        </div>

        <div className='mt-10 flex flex-col'>
          {menuItems.map((item, index) => (
            <Link
              className='py-3 px-2 text-white body border-2 border-white/30 rounded-xl shadow-xl my-3 '
              to={item.to}
              key={index}
            >
              {item.title}
            </Link>
          ))}

          <button className='bg-white body mt-6 font-bold px-6 py-3 text-text rounded-xl'>
            Login
          </button>

          <button className='bg-text body mt-5 font-bold px-6 py-3 text-white rounded-xl'>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
