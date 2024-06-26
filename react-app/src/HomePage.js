import React from 'react'
import "./HomePage.css"
import Banner from './layout/Banner/Banner'
import AppartmentGrid from './componentes/ApartmentGrid/ApartmentGrid'
import HomeBanner from "../src/assets/images/banner.png";


function HomePage() {
  return (
    <>
        <Banner image={HomeBanner} title="Chez vous et partout ailleurs" />
        <AppartmentGrid />
    </>
  )
}

export default HomePage