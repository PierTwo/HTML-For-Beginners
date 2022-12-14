import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-neutral-200 container mx-auto px-4 rounded-b">
      <div className="flex justify-around">
        <div className="">
          <Link className="text-white" to="/">
            <h1 className="font-extrabold text-3xl bg-sky-500/100 pt-4 pb-4 mb-4 rounded-b-lg text-center">
              Tutorials
            </h1>
          </Link>
          <h2 className="m-2 text-lg">HTML Tutorials For Beginners... </h2>
        </div>
        <div className="">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn font-medium p-3 m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button
                className="btn rounded font-medium bg-sky-400 p-2 m-2"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <div className="mt-4">
              <Link className="btn font-medium p-3" to="/login">
                Login
              </Link>
              <Link className="btn font-medium p-3" to="/signup">
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
