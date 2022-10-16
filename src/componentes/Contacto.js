import React from 'react'
import styled from 'styled-components'

const Contacto = () => {
  return (
    <Contenedor_Contacto>
        <div className='section-centrada'>
            <h3> ¿A qué esperas? ¡Únete a nuestra newsletter y disfruta de un 10% de descuento en tu primera compra! </h3>
            <div className='contenido'>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor N. del T. 
                </p>
                <form action='' className='form-contacto'>
                    <input type="email" className='form-input' placeholder='Email...'></input>
                    <button type='submit' className='submit-btn'>SUSCRIBETE</button>
                </form>
            </div>
        </div>
    </Contenedor_Contacto>
  )
}

const Contenedor_Contacto = styled.section`
padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: grey;
  }
  .form-contacto {
    width: 60vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1.5px solid #888888;
  }
  .form-input {
    border-right: none;
    color: grey;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .form-input::placeholder {
    color: #888888;
  }
  .submit-btn {
    background-color: #b19277 !important;
    cursor: pointer;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    //transition: all 0.3s linear;
    color: black;
  }
  .submit-btn:hover {
    color: white;
  }
  @media (min-width: 850px) {
    .contenido {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
`

export default Contacto