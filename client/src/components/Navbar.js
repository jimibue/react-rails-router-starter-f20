import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// For Basic setup only please change

// if not logged in I want register/login links

// if logged in I want logout link, also ProtectRoutes Rendered
const NavBar = () => {
  const { user } = useContext(AuthContext);

  const getRightNav = () => {
    if (user) {
      return (
        <>
          {/* what I am badly here */}
          <div style={{ color: "steelblue" }}>logout!</div>
        </>
      );
    } else {
      return (
        <>
          <Link to="/register">register</Link>
          <Link to="/login">login</Link>
        </>
      );
    }
  };

  return (
    <div style={styles.navbar}>
      <div>
        <Link to="/">Home</Link>
        <span style={{ marginRight: "10px" }}></span>
        <Link to="/thingsDemo">Things</Link>
      </div>
      <div>{getRightNav()}</div>
    </div>
  );
};

const styles = {
  navbar: {
    width: "100%",
    background: "black",
    padding: "10px",
    display: "flex",
    justifyContent: "end",
  },
};

export default NavBar;
