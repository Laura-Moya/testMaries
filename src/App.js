import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './componentes/Navbar';
import { Footer } from './componentes/Footer'

import {Home, QuienesSomos, Carrito, Productos, Pago, Error404} from './pages'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/quienesSomos' element={<QuienesSomos />} />
        <Route exact path='/carrito' element={<Carrito />} />
        <Route exact path='/productos' element={<Productos />} />
        {/**<Route exact path='/productos/:id' children={<Producto />} />**/}
        <Route exact path='/pago' element={<Pago />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

