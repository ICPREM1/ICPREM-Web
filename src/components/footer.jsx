import face from "../assets/Facebook.svg";
import insta from "../assets/Instagram.svg";
import twitter from "../assets/Twitter.svg";
import link from "../assets/Vector.svg";

const Footer = () => {
  return (
    <footer className='bg-[#232323] body lg:container mx-auto lg:px-20 px-5 lg:py-20 py-10 text-white/90'>
      <section className='flex lg:flex-row flex-col justify-between'>
        <div className='lg:basis-2/4 basis-full'>
          <p className='font-black lg:text-3xl text-2xl head'>ICPREM</p>

          <p className='mt-5 lg:text-lg text-sm'>
            Join our newsletter to stay up to date on features and releases.
          </p>

          <div className='flex justify-between mt-5'>
            <input
              type='email'
              className='bg-transparent rounded-md lg:rounded-xl text-white/70 lg:text-base text-sm outline-none px-2 lg:px-6 w-[70%] lg:py-4 py-3 border-2 border-white/90'
              placeholder='Enter your Email'
              name=''
              id=''
            />
            <button className='border-2 lg:px-12 px-2 rounded-md lg:rounded-xl lg:text-base text-sm border-white/90'>
              Subscribe
            </button>
          </div>

          <p className='mt-5 text-sm'>
            By subscribing you agree to our Privacy Policy and provide consent
            to receive updates from our company.
          </p>
        </div>

        <div className='lg:basis-1/3 lg:mt-0 mt-10 basis-full flex flex-col lg:pl-16'>
          <p>Follow Us</p>
          <a href='#' className='flex my-3'>
            <img src={face} className='mr-3' alt='' />
            Facebook
          </a>

          <a href='#' className='flex my-3'>
            <img src={insta} className='mr-3' alt='' />
            Instagram
          </a>

          <a href='#' className='flex my-3'>
            <img src={twitter} className='mr-3' alt='' />
            Twitter
          </a>

          <a href='#' className='flex my-3'>
            <img src={link} className='mr-3' alt='' />
            LinkedIn
          </a>
        </div>
      </section>

      <section className='lg:mt-20 mt-10 border-t-2 border-grey pt-10 flex lg:flex-row flex-col lg:justify-between'>
        <div>2024 ICPREM. All right reserved.</div>

        <div className='flex justify-between lg:justify-normal lg:mt-0 mt-5'>
          <p className='underline lg:mx-3 text-xs lg:text-base'>
            Privacy Policy
          </p>
          <p className='underline lg:mx-3 text-xs lg:text-base'>
            Terms of Service
          </p>
          <p className='underline lg:mx-3 text-xs lg:text-base'>
            Cookies Settings
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
