import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MixCard from "../components/mixes/MixCard";

function Mixes() {
  const mixes = [
    {
      title: "Piano Wave",
      slug: "piano-wave",
      genre: "Amapiano",
      price: "₦2,000",
    },
    {
      title: "After Hours",
      slug: "after-hours",
      genre: "Afro / Amapiano",
      price: "₦1,500",
    },
    {
      title: "The Rave",
      slug: "the-rave",
      genre: "Afro House",
      price: "₦2,000",
    },
    {
      title: "Midnight Frequency",
      slug: "midnight-frequency",
      genre: "Amapiano / Afro",
      price: "₦2,000",
    },
    {
      title: "Sunday Motion",
      slug: "sunday-motion",
      genre: "Afrobeat",
      price: "₦1,500",
    },
    {
      title: "Late Night Energy",
      slug: "late-night-energy",
      genre: "Afro House",
      price: "₦2,000",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main>
        <section className="border-b border-white/10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Moerell MixVault
            </p>

            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                  The Mixes
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                  Explore the collection. Choose a sound, find your moment,
                  and take the mix with you.
                </p>
              </div>

              <Link
                to="/"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Back home →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-white/40">
                {mixes.length} mixes available
              </p>

              <p className="text-sm text-white/30">
                Curated by Moerell
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mixes.map((mix) => (
                <MixCard key={mix.slug} mix={mix} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Mixes;