function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-white/40 sm:flex-row">
        <p>© 2026 Moerell MixVault. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="/privacy" className="transition hover:text-white">
            Privacy
          </a>

          <a href="/terms" className="transition hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;