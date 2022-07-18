import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import "./NavBar.css"
// import UserContext from "./UserContext";

const NavBar = () => {
  // const { user } = useContext(UserContext)

  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
    </nav>
  )
}

export default NavBar