import { ArrowLeft, Clock3, Download, Headphones } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function MixDetails() {
  const { slug } = useParams();

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <Link
          to="/mixes"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to mixes
        </Link>

        <section className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
          {/* Cover */}
          <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="flex h-full items-center justify-center text-white/30">
              Cover Artwork
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Amapiano / Piano Rave
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
              Piano Wave
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              A mix to remember. A carefully selected journey through
              Amapiano and piano-driven sounds.
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/50">
              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} />
                45:32
              </span>

              <span className="inline-flex items-center gap-2">
                <Headphones size={16} />
                Amapiano
              </span>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-sm text-white/40">Price</p>

              <p className="mt-1 text-3xl font-semibold">
                ₦2,000
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
  to={`/checkout/${slug}`}
  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
>
  <Download size={17} />
  Get the Mix
</Link>

                <button
                  type="button"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Preview
                </button>
              </div>

              <p className="mt-4 text-xs leading-5 text-white/30">
                You'll be redirected to secure OPay checkout to complete
                your purchase.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MixDetails;