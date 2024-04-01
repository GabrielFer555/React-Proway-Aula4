import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import Component2 from './Component2'
import { useContext, useState } from 'react';

export default function Component1() {
  const {nome, idade} = useContext(UserContext)
  const [user, setUser] = useState(nome)
  const [age, setAge] = useState(idade)


  return (
    <>
      <input type="text" name="something" id="something" onChange={(e) =>setUser(e.target.value)}/>
      <h1>{`Hello ${user}!`}</h1>
      <h1>{`You´re ${age}! years old`}</h1>
      <hr />
      <Link to='/'>Voltar</Link>

    </>
  );
}
