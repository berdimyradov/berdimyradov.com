import Link from "next/link";
import { FaMoneyCheckAlt, FaHistory, FaUserShield } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 h-14 bg-gray-800 w-full">
      <div className="p-4 w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg">
            Home
          </Link>
          <div className=" text-gray-300 hidden md:flex md:items-center md:justify-end md:flex-1 lg:w-0">
            <Link
              href="/payment"
              className="flex items-center whitespace-nowrap text-base font-medium hover:text-white mx-4"
            >
              <FaMoneyCheckAlt className="mr-2" />
              Payment
            </Link>{" "}
            <Link
              href="/history"
              className="flex items-center whitespace-nowrap text-base font-medium hover:text-white mx-4"
            >
              <FaHistory className="mr-2" />
              History
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
