import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#7600dc" : "#f0f0f0",
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
              })}
              to="/movie"
            >
              Movie
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
