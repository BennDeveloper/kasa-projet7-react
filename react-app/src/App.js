import React from 'react'
import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'
import AppartmentGrid from './componentes/ApartmentGrid'
import Footer from './componentes/Footer'
import "./App.css"
import Main from './componentes/Main'


function App() {
  return (
    <div>
      <Main>
        <Navbar />
        <Banner />
        <AppartmentGrid />
      </Main>
      <Footer />
    </div>
  )
}

export default App