import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from "/logo.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
      logOut()
      .then(() =>{
        
      })
      .catch(error => console.log(error.message))
  }
  const lis = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user?.email ? <li><Link to="/bookings">My Bookings</Link></li> : ""}
      <li>
        <Link>Donation</Link>
      </li>
      <li>
        <Link>Events</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {lis}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
            <h2>Volunteer</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{lis}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user?.email ? (
            <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
          ) : (
            <Link to="/signup">
            <button className="btn btn-primary">Register</button>
            </Link>
          )}
          <button className="btn">Admin</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
