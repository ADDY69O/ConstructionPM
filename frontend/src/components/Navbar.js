import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          PMCongo
        </Link>

        <div className=" flex justify-around items-center gap-12">
          <Link to="/login" className="text-xl font-semibold">
            Login
          </Link>
          <Link to="/signup" className="text-xl font-semibold">
            Register
          </Link>
          <Link to="/create" className="text-xl font-semibold">
            Create Project
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
