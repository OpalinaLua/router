import { Link, Outlet } from "react-router";

export const Dashbord = () => {
  return (
    <div>
      <h1>Dashboad</h1>
      <Link to="/dashbord/settings">Configuração</Link>
      <Outlet />
    </div>
  );
};
