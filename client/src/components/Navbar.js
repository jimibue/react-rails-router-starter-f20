import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";
// For Basic setup only please change

// if not logged in I want register/login links

// if logged in I want logout link, also ProtectRoutes Rendered
const NavBar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);

  const getRightNav = () => {
    if (user) {
      return (
        <>
          {/* part 2 what I am badly here Instant Bug */}
          <div
            onClick={() => handleLogout(history)}
            style={{ color: "steelblue" }}
          >
            logout!
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link to="/register">register</Link>
          <span style={{ marginRight: "10px" }}></span>
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
        {user && <Link to="/thingsDemo">Things</Link>}
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
    justifyContent: "space-between",
  },
};

export default NavBar;
