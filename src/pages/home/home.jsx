import Navbar from "../../components/navbar";
import Features from "./features";
import Hero from "./hero";
import Payment from "./payment";

const Home = () => {
  return (
    <main>
      <div className='min-h-screen container mx-auto lg:px-20 px-5'>
        <Navbar />
        <Hero />
        <Features />
      </div>
      <Payment/>
    </main>
  );
};

export default Home;
