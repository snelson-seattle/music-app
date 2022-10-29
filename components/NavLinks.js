import Link from "next/link";
import {
    HiOutlineHome,
    HiOutlineUserGroup,
    HiOutlineHashtag,
    HiOutlinePhotograph,
  } from "react-icons/hi";

const NavLinks = () => {
    return (
      <div className="mt-10">
        <Link
          href="/"
          className="flex flex-row justify-start items-center my-8 text-md text-gray-400 font-medium hover:text-cyan-600"
        >
          <HiOutlineHome className="w-6 h-6 mr-2" />
          Discover
        </Link>
        <Link
          href="/"
          className="flex flex-row justify-start items-center my-8 text-md text-gray-400 font-medium hover:text-cyan-600"
        >
          <HiOutlinePhotograph className="w-6 h-6 mr-2" />
          Around You
        </Link>
        <Link
          href="/"
          className="flex flex-row justify-start items-center my-8 text-md text-gray-400 font-medium hover:text-cyan-600"
        >
          <HiOutlineUserGroup className="w-6 h-6 mr-2" />
          Top Artists
        </Link>
        <Link
          href="/"
          className="flex flex-row justify-start items-center my-8 text-md text-gray-400 font-medium hover:text-cyan-600"
        >
          <HiOutlineHashtag className="w-6 h-6 mr-2" />
          Top Charts
        </Link>
      </div>
    );
  };

  export default NavLinks;