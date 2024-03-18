import Navbar from "@/components/navbar";
import Bio from "./bio";
import Collection from "./collection";
import Transactions from "./transactions";

const Profile = () => {
  return (
    <main className='min-h-screen container mx-auto lg:px-20 px-5'>
      <Navbar />
      <Bio/>
      <Collection/>
      <Transactions/>
    </main>
  );
};

export default Profile;
