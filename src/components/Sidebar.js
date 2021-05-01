import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarData } from "../data/sidebarData";
import palette from "../lib/style/palette";

const TopNavBlock = styled.div`
  background-color: ${palette.navBackground};
  display: flex;
  align-items: center;
  justify-content: start;
  height: 7vh;
  font-size: 2rem;
  a {
    margin-left: 10px;
  }
`;

const SideNavBlock = styled.nav`
  box-sizing: border-box;
  background-color: ${palette.navBackground};
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  transform: translateX(-100%);
  transition: 0.5s;
  padding: 10px;
  ${(props) =>
    props.active &&
    css`
      transform: translateX(0%);
    `}
`;

const UlBlock = styled.ul`
  font-family: "Merriweather", serif;
  list-style: none;
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;

  a {
    color: ${palette.foreground};
    text-decoration: none;
    transition: 200ms;
    &:hover {
      color: ${palette.hover};
    }
  }

  li {
    margin-bottom: 15px;
    width: 100%;

    span {
      margin-left: 10px;
    }
  }
`;

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  return (
    <>
      <TopNavBlock>
        <Link to="#">
          {active ? (
            <AiOutlineClose onClick={toggleActive} />
          ) : (
            <FaBars onClick={toggleActive} />
          )}
        </Link>
      </TopNavBlock>
      <SideNavBlock active={active ? true : false}>
        <UlBlock>
          {/* <li className="nav-item">
            <Link to="#">
              <AiOutlineClose />
            </Link>
          </li> */}
          {sidebarData.map((item) => (
            <li className="nav-item" key={item.title}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </UlBlock>
      </SideNavBlock>
    </>
  );
};

export default Sidebar;
