function FeaturedMix() {
  return (
    <section id="featured" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            The latest sound
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:grid-cols-2">
          <div className="aspect-square bg-white/5">
            <div className="flex h-full items-center justify-center text-sm text-white/30">
              Cover Artwork
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-sm text-white/40">
              Amapiano / Piano Rave
            </p>

            <h3 className="mt-3 text-4xl font-semibold tracking-tight">
              Piano Wave
            </h3>

            <p className="mt-5 max-w-md leading-7 text-white/60">
              A mix to remember. A carefully selected journey through
              Amapiano and piano-driven sounds.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <span className="text-2xl font-semibold">₦2,000</span>

              <a
                href="/mixes/piano-wave"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Get the Mix
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMix;