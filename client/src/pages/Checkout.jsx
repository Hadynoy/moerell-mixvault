import { ArrowLeft, Lock, Mail, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function Checkout() {
  const { slug } = useParams();

  const mix = {
    title: "Piano Wave",
    genre: "Amapiano",
    price: 2000,
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Link
          to={`/mixes/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to mix
        </Link>

        <div className="mt-12">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Secure Checkout
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Get your mix
          </h1>

          <p className="mt-4 max-w-xl text-white/50">
            Enter your email below. After your payment is successfully
            verified, we'll provide your secure download.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_380px]">
          {/* Customer details */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Mail size={18} />
              </div>

              <div>
                <h2 className="font-medium">Delivery email</h2>
                <p className="text-sm text-white/40">
                  Your download link will be connected to this order.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-white/60"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex gap-3">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-white/70"
                />

                <div>
                  <p className="text-sm font-medium">
                    Secure digital delivery
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/40">
                    Your download becomes available only after your payment
                    has been successfully verified.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Order summary */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Order Summary
            </p>

            <div className="mt-6">
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="flex h-full items-center justify-center text-sm text-white/25">
                  Cover Artwork
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  {mix.genre}
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  {mix.title}
                </h2>
              </div>
            </div>

            <div className="my-6 border-t border-white/10" />

            <div className="flex items-center justify-between">
              <span className="text-sm text-white/50">
                Total
              </span>

              <span className="text-2xl font-semibold">
                ₦{mix.price.toLocaleString()}
              </span>
            </div>

            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              <Lock size={16} />
              Continue to OPay
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-white/30">
              You will be redirected to secure OPay checkout to complete
              your payment.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Checkout;