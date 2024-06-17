import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Banner from './componentes/Banner/Banner'
import AppartmentGrid from './componentes/ApartmentGrid/ApartmentGrid'
import Footer from './componentes/Footer/Footer'
import "./App.css"
import Main from './componentes/Main/Main'
import HomeBanner from "../src/assets/images/banner.png";


function App() {
  return (
    <div>
      <Main>
        <Navbar />
        <Banner image={HomeBanner} title="Chez vous et partout ailleurs" />
        <AppartmentGrid />
      </Main>
      <Footer />
    </div>
  )
}

export default App