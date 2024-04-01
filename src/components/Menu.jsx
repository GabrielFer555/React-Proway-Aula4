import { Link, Outlet } from "react-router-dom"
import * as React from 'react';

const Menu = () => {



    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Menu</Link></li>
                    <li><Link to='component1'>Componente 1</Link></li>
                    <li><Link to='component2'>Componente 2</Link></li>
                    <li><Link to='component3'>Componente 3</Link></li>
                    <li><Link to='cadastro'>Cadastro</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}


export default Menu