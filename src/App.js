import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1'
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import Component3 from './components/Component3';
import Rotas from './rotas/Rotas';

function App() {
  const [nome, setNome] = useState('maria')
  const [idade, setIdade] = useState(25)

  return (
    <>
    <UserContext.Provider value={{nome, idade}}>
      <Rotas/>
    </UserContext.Provider>

    </>
  );
}

export default App;
