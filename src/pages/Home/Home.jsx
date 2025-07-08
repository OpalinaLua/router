import { Link, useLocation } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";

export const Home = () => {
  const location = useLocation();
  const formValue = location.state || {};
  console.log(formValue, "<---Valores recebidos por location");
  return (
    <>
      <h1>Home</h1>
      <p>Nome: {formValue ? formValue.name : ""}</p>
      <p>Mensagem: {formValue ? formValue.message : ""}</p>
      <div>
        <Link to="produto/roteador-cisco">
          ir para pagina do produto roteador
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
};
