import React, {useNavigate} from 'react'


const Login = () => {
    const navigate = useNavigate()

    const handleLogoutClick = () =>{
        localStorage.removeItem('userLogado')
        navigate('/')
    }
    const handleLoginClick = () => {
        localStorage.setItem('userLogado', 'nome')
    }

  return (
    <>
        <button onClick={()=>{handleLoginClick()}}>Login</button>
        <button onClick={()=>{handleLoginClick()}}>Logout</button>
    </>
  )
}

export default Login