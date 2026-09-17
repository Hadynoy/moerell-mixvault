import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-[#080808] text-white">
      <Navbar />

      <main className="h-full w-full">
        <Hero />
      </main>
    </div>
  );
}

export default Home;