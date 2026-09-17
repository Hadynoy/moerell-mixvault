function MixCard({ mix }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
      <a href={`/mixes/${mix.slug}`}>
        <div className="aspect-square overflow-hidden bg-white/5">
          <div className="flex h-full items-center justify-center text-sm text-white/30">
            Cover Artwork
          </div>
        </div>
      </a>

      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-white/40">
          {mix.genre}
        </p>

        <h3 className="mt-2 text-xl font-medium">
          {mix.title}
        </h3>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-medium">
            {mix.price}
          </span>

          <a
            href={`/mixes/${mix.slug}`}
            className="text-sm text-white/60 transition hover:text-white"
          >
            View mix →
          </a>
        </div>
      </div>
    </article>
  );
}

export default MixCard;