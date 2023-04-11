import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import { Container } from 'react-bootstrap'

const Pagina = (props) => {

  console.log(props)

  return (
    <>
      <Cabecalho />
      <div className='bg-light py-5 mb-3'>
        <Container> 
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      {props.children}

    </>
  )
}

export default Pagina