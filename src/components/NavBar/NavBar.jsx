import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { loadFromSessionStorage } from "../../services/sessionStorage";
import Logout from "../Logout/Logout";

const NavBar = () => {
  const currentUser = useSelector((state) => state.loggedUser);
  const currentUserId = currentUser.id || loadFromSessionStorage("USER")[0];
  const location = useLocation();

  const navLinks =
    currentUser === false &&
    location.pathname !== `/contacts/${currentUserId}` ? (
      <>
        <NavLink to="/">Home Page___</NavLink>
        <NavLink to="/login">Sign In___</NavLink>
        <NavLink to="/register">Sign Up</NavLink>
      </>
    ) : (
      <>
        <Logout />
      </>
    );

  return <div>{navLinks}</div>;
};

export default NavBar;
