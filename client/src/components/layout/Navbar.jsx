import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import Moerell from "../../assets/images/Moerell.png";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current text-white"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.53 0 .22 5.31.22 11.84c0 2.09.55 4.13 1.59 5.92L.12 24l6.39-1.67a11.8 11.8 0 0 0 5.54 1.41h.01c6.52 0 11.82-5.31 11.82-11.84 0-3.16-1.23-6.13-3.36-8.42ZM12.06 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.83 9.83 0 0 1-1.51-5.2c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.03 6.96 2.89a9.79 9.79 0 0 1 2.88 6.97c0 5.42-4.41 9.83-9.83 9.83Zm5.39-7.37c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.09 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current text-white"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 sm:py-6">
          <Link to="/" className="flex items-center">
            <img
              src={Moerell}
              alt="Moerell"
              className="h-12 w-auto sm:h-16 lg:h-20"
            />
          </Link>

          <div className="flex items-center gap-4 text-xs text-white/75 sm:gap-8 sm:text-sm">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md transition hover:bg-white/20 sm:px-5 sm:py-2.5"
            >
              Book Me
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/10 bg-[#101010] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Book Moerell
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Let’s work.
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Reach me through any of the channels below.
                </p>
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

            <div className="mt-7 space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/2348098986274"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
              >
                <WhatsAppIcon />

                <div>
                  <p className="text-sm font-medium text-white">WhatsApp</p>
                  <p className="mt-1 text-xs text-white/40">
                    08098986274
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:09166534315"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
              >
                <Phone className="h-5 w-5 text-white" />

                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="mt-1 text-xs text-white/40">
                    09166534315
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/moerell84"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
              >
                <InstagramIcon />

                <div>
                  <p className="text-sm font-medium text-white">Instagram</p>
                  <p className="mt-1 text-xs text-white/40">
                    moerell84
                  </p>
                </div>
              </a>

              {/* X */}
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;