import { Link } from "react-router-dom";
import Component3 from "./Component3";


export default function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />

        <hr />
        <Link to='/'>Voltar</Link>

      </>
    );
}