import { useParams } from "react-router";

export const Product = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>o nome do meu produto e :{name} </h1>
    </div>
  );
};
