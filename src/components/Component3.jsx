import { useContext } from "react";
import Component4 from "./Component4";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";

{/*export default function Component3({ user }) {  
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    );
  }}*/}


export default function Component3({ user }) {
  const { nome, idade } = useContext(UserContext)

  return (
    <>
      <div>
        <h1>Component 3</h1>
        <h2>Nome: {nome}</h2>
        <h2>Idade: {idade}</h2>
      </div>
      <hr />
      <Link to='/'>Voltar</Link>


    </>
  );
}