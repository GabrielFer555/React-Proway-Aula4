import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from '../components/Menu'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'
import Cadastro from '../components/cadastro/cadastro'

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Menu/>}/>
            <Route path='component1' element={<Component1/>}/>
            <Route path='component2' element={<Component2/>}/>
            <Route path='component3' element={<Component3/>}/>
            <Route path='cadastro' element={<Cadastro/>}/>
            <Route path='login' element={<Cadastro/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas