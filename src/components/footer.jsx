import face from "../assets/Facebook.svg";
import insta from "../assets/Instagram.svg";
import twitter from "../assets/Twitter.svg";
import link from "../assets/Vector.svg";

const Footer = () => {
  return (
    <footer className='bg-[#232323] body container mx-auto lg:px-20 px-5 py-10 text-white'>
      <section className='flex lg:flex-row flex-col justify-between'>
        <div className='lg:basis-2/4 basis-full'>
          <p className='font-bold lg:text-3xl text-2xl head'>Logo</p>

          <p className='mt-5 lg:text-lg text-sm'>
            Join our newsletter to stay up to date on features and releases.
          </p>

          <div className='flex justify-between mt-5'>
            <input
              type='email'
              className='bg-transparent text-grey outline-none px-6 w-[70%] py-4 border-2 border-white'
              placeholder='Enter your Email'
              name=''
              id=''
            />
            <button className='border-2 px-12 border-white'>Subscribe</button>
          </div>

          <p className='mt-5 text-sm'>
            By subscribing you agree to our Privacy Policy and provide consent
            to receive updates from our company.
          </p>
        </div>

        <div className='lg:basis-1/3 basis-full flex flex-col lg:pl-16'>
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

      <section></section>
    </footer>
  );
};

export default Footer;
