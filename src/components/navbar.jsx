import { Link } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  let menuItems = [
    { title: "Home", to: "/", icon: "" },
    { title: "Pay Due", to: "/payDues", icon: "" },
    { title: "Profile", to: "/profile", icon: "" },
  ];

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  return (
    <nav className='flex items-center lg:h-24 h-16 lg:pt-5 lg:border-0 body border-primary border-b-[1px]'>
      <section className='lg:basis-1/4 basis-1/2'>
        <p className='font-black text-3xl head'>ICPREM</p>
      </section>
      <section className='basis-1/2 justify-center lg:flex hidden'>
        {menuItems.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className='mx-8 text-lg font-semibold text-grey'
          >
            {item.title}
          </Link>
        ))}
      </section>
      <section className='basis-1/4 z-20 lg:flex hidden justify-end'>
        {/* If User is logged in it displays the "Connect wallet button else you get Sign Up and Login. Initally user isn't logged in " */}
        {isLogged ? (
          <>
            <Link
              to={"/"}
              className='bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-xl'
            >
              Connect Wallet
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              onClick={() => console.log("heee")}
              className='mx-5 text-text border-2 bg-white border-text font-bold px-8 py-3 rounded-xl'
            >
              Login
            </Link>

            <Link
              to={"/signUp"}
              className='bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-xl'
            >
              Sign Up
            </Link>
          </>
        )}
      </section>
      {/* Mobile Menu For Responsive View */}
      <section className='flex lg:hidden basis-1/2 justify-end'>
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

        <div className='mt-10 flex flex-col divide-y-2 divide-dashed divide-white/30'>
          {menuItems.map((item, index) => (
            <Link
              className='py-6 text-white flex my-0'
              to={item.to}
              key={index}
            >
              {item.title}
            </Link>
          ))}

          {isLogged ? (
            <Link to={"/"} className='py-6 text-white'>
              Connect Wallet
            </Link>
          ) : (
            <>
              <Link to={"/login"} className='py-6 text-white'>
                Login
              </Link>

              <Link to={"/signUp"} className='py-6 text-white'>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
