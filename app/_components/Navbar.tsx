import Link from "next/link";
import React from "react";
import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  const session = false;
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/contact" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/contact" className=" hover:text-blue-600 mr-8">
                Contacts
              </Link>
              <LogoutBtn />
            </>
          ) : (
            <>
             <Link href="/login" className=" hover:text-blue-600 mr-5">
                Login
              </Link>
               <Link href="/register" className=" hover:text-blue-600">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
