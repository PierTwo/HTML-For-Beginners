import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-gray-200 container mx-auto px-4">
      <div className="flex justify-start">
        <div>
          <Link className="text-white" to="/">
            <h1 className="text-2xl bg-sky-500/100 px-4 pt-2 pb-2 mb-4 rounded-b-lg">
              Tutorials
            </h1>
          </Link>
          <p className="m-0">HTML Tutorials For Beginners... </p>
        </div>
        <div className="">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn bg-sky-400 p-3 m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn bg-sky-400 p-2 m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <div className="mt-2">
              <Link className="btn bg-sky-400 p-3" to="/login">
                Login
              </Link>
              <Link className="btn bg-sky-400 p-3" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
