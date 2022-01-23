import { ContainerNav } from "./CSSContainerLoad";
import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ContainerNav>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#7600dc" : "#f0f0f0",
                borderRadius: "5px",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#7600dc" : "#f0f0f0",
                borderRadius: "5px",
              })}
              to="/movie"
            >
              Movie
            </NavLink>
          </li>
        </ContainerNav>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
