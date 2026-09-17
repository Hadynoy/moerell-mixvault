import { useState } from "react";
import Adi from "../../assets/images/Adi.PNG";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        className="relative h-[100dvh] min-h-[100dvh] max-h-[100dvh] overflow-hidden"
        style={{
          backgroundImage: `url(${Adi})`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
        }}
      >
        {/* Image treatment */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-[100dvh] min-h-[100dvh] max-h-[100dvh] max-w-7xl items-end px-5 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/65 sm:mb-5 sm:text-xs sm:tracking-[0.35em]">
              Moerell MixVault
            </p>

            <h1 className="text-[3.7rem] font-semibold leading-[0.88] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              Sound
              <br />
              <span className="text-white/80">In Motion.</span>
            </h1>

            <p className="mt-6 max-w-[320px] text-sm leading-6 text-white/65 sm:mt-8 sm:max-w-lg sm:text-base">
              Curated mixes for late nights, long drives, crowded rooms and
              everything in between.
            </p>

            <div className="mt-7 sm:mt-8">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10 sm:px-8 sm:py-4"
              >
                Get the Mix
              </button>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="absolute bottom-6 right-5 z-10 hidden text-right text-[10px] uppercase tracking-[0.2em] text-white/45 sm:block">
          <p>Digital Mix Collection</p>
          <p className="mt-2">Lagos · Nigeria</p>
        </div>
      </section>

      {/* Purchase modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 px-5 py-6 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/10 bg-[#101010] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Moerell MixVault
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Piano Wave
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-2xl leading-none text-white/40 transition hover:text-white"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">Price</span>

                <span className="text-xl font-semibold text-white">
                  ₦1,000
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/50">
              You will be charged <span className="text-white">₦1,000</span>{" "}
              for this mix. You will be redirected to OPay to complete your
              payment securely.
            </p>

            <button
              type="button"
              className="mt-7 w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Continue to OPay
            </button>

            <p className="mt-4 text-center text-xs text-white/30">
              Secure payment powered by OPay
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;