import { HiOutlineMenu } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="mx-2 px-4 py-2">
        <div className="relative flex justify-between items-center">

          <button className="md:hidden text-3xl text-[#475569]">
            <HiOutlineMenu />
          </button>

          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          />

          <ul className="hidden md:flex justify-between items-center gap-10 mx-auto">
            <li className="text-pink-500">Home</li>
            <li className="text-[#475569] font-sans">Technologies</li>
            <li className="text-[#475569] font-sans">Projects</li>
            <li className="text-[#475569] font-sans">About</li>
            <li className="text-[#475569] font-sans">Contact</li>
          </ul>

          <div className="flex justify-between items-center gap-3 md:gap-5 text-[#475569] font-sans">
            <button className="text-xs md:text-base">
              Sign in
            </button>

            <button className="brand-gradient text-white rounded-full px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-base">
              Sign up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;