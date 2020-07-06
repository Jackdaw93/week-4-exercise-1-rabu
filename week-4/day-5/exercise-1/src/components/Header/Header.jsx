import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Navigation = styled.nav`
  margin: auto;
  text-align: center;
  font-family: fantasy;
  width: 100%;
  font-size: 20px;
`;

const Ul = styled.ul`
  background: #7f8c8d;
  list-style: none;
  position: relative;
  display: inline-table;
  width: 100%;
  padding: 0 20px;
`;

const NavLink = styled.li`
  float: left;
  & li:hover {
    background: #16a085;
  }
  & li:hover a {
    color: white;
  }
  & a {
    display: block;
    padding: 20px;
    color: #bdc3c7;
    text-decoration: none;
  }
`;

function Header() {
  return (
    <Navigation>
      <Ul>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/bmical">MBI App</Link>
        </NavLink>
        <NavLink>
          <Link to="/catcal">Cat Calculator App</Link>
        </NavLink>
        <NavLink>
          <Link to="/text-trans">Text Transform App</Link>
        </NavLink>
      </Ul>
    </Navigation>
  );
}

export default Header;
