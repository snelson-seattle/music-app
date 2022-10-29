import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import NavLinks from "./NavLinks";

const SideBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex flex-col w-[240px] py-10 px-4 bg-black">
        <NavLinks />
      </div>

      <div className="absolute top-6 right-3 block md:hidden">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-blue-800 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition flex flex-col items-center justify-start ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <NavLinks />
      </div>
    </>
  );
};

export default SideBar;
