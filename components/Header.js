import Image from "next/image";

function Header({ setShowModal }) {
  return (
    <header className="h-[530px] bg-header bg-no-repeat bg-center bg-cover after:absolute after:top-0 after:left-0 after:w-full after:h-[180px] after:z-10 after:bg-linear-gradient-3">
      <nav className="flex justify-end py-5 px-10 z-50 relative">
        <ul>
          <li>
            <button
              className="font-semibold uppercase tracking-wide"
              onClick={() => setShowModal(true)}
            >
              Log In
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col justify-start items-center mt-[30px] text-center px-5 md:px-0">
        <h4 className="mb-5">Try up to one month free</h4>
        <Image
          src="http://tny.im/pfY"
          width={270}
          height={80}
          alt="Hulu"
          objectFit="contain"
        />
        <div className="mt-5 mb-10 md:mb-0 text-[22px] font-semibold">
          Watch thousands of TV shows and movies.
        </div>
        <div className="hidden md:inline text-lg my-[25px]">
          HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
        </div>
        <button className="button hover:opacity-80">
          Start Your Free Trial
        </button>
        <div className="legal-text">
          Free trial for new & eligible returning subscribers only.
        </div>
      </div>
    </header>
  );
}

export default Header;
