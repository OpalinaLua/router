import { useState } from "react";
import { Navbar } from "../../components/Navbar.jsx/Navbar";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    nome: "",
    mensagem: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    navigate("/");
  };

  return (
    <>
      <h1>home </h1>
      <div>
        <Navbar />
      </div>
      <div>
        <form onSubmit={handlesubmit}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" onChange={handleChange} />
          <br />
          <label htmlFor="mensagem">Mensagem</label>
          <input type="text" name="mensagem" onChange={handlesubmit} />
          <br />
          <button type="submit">enviar</button>
        </form>
      </div>
    </>
  );
};
