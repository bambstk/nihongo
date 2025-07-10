import Searchbar from '../components/Navbar';
import logo from '../media/moi.jpg';

function Home() {
  return (
      <div>
        <Searchbar />
        <div className="bg-[#13151a] text-white min-h-screen flex flex-col items-center justify-center text-xl">
            <h2 className='mb-20'>
            Bienvenu à moi
            </h2>
            <img src={logo} className="size-60 animate-[spin_infinite_10s_linear]" alt="logo" />
            <p className='mt-20'>
            Bienvenu à moi sur mon propre site pour que je révise le vocabulaire de japonais un peu !!
            </p>
            <a
            className="text-[#31c224] hover:underline hover:text-[#7eeb75] my-8"
            href="/tests"
            >
            Réviser son vocabulaire un peu !!
            </a>
        </div>
      </div>    
      
  );
}

export default Home;
