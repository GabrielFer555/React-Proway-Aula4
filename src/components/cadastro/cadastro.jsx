import React from 'react'
import TextField from '@mui/material/TextField';
import './cadastro.css'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {useState, useRef, useEffect} from 'react'
import {useNavigate, Navigate} from 'react-router-dom'


const Cadastro = () => {


  const [name, setName] = useState('')
  const [idade, setIdade] = useState('')
  const nameRef = useRef(null)
  const idadeRef = useRef(null)
  const navigate = useNavigate()

    
  useEffect(()=>{
    if(localStorage.getItem('userLogado') === null){
      navigate('/login')
    }

  }, [])


  const handleGravarClick = () =>{
    if(name === ''){
      nameRef.current.focus()
      return;
    }
    if(idade === ''){
      idadeRef.current.focus()
      return;
    }
  }

  return (
    <div className="content">
      <Grid container spacing={2}>
        <Grid Item xs={6} >
          <TextField
            id="outlined-password-input"
            label="Nome"
            type="text"
            autoComplete="off"
            fullWidth
            inputRef={nameRef}
            onChange={(e)=>{setIdade(e.target.value)}}
          />
        </Grid>
        <Grid Item xs={4} ml={6} >
          <TextField
            id="outlined-password-input"
            label="Idade"
            type="number"
            autoComplete="off"
            fullWidth
            inputRef={idadeRef}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid Item xs={4}>
          <Button variant='contained' onClick={()=>{handleGravarClick()}}>Gravar</Button>
        </Grid>
      </Grid>

    </div>
  )
}

export default Cadastro