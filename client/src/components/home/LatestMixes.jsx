import MixCard from "../mixes/MixCard";

function LatestMixes() {
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
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              MixVault
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Latest mixes
            </h2>
          </div>

          <a
            href="/mixes"
            className="hidden text-sm text-white/50 transition hover:text-white sm:block"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mixes.map((mix) => (
            <MixCard key={mix.slug} mix={mix} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestMixes;