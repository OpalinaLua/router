import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) => <span> {isActive ? "🏠Home" : "Home"}</span>}
      </NavLink>{" "}
      <br />
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) => <span> {isActive ? "📱Contatos" : "Contatos"}</span>}
      </NavLink>{" "}
      <br />
      <NavLink
        to="/dashbord"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) => (
          <span> {isActive ? "📱Dashboard" : "Dashboard"}</span>
        )}
      </NavLink>{" "}
      <br />
    </>
  );
};
