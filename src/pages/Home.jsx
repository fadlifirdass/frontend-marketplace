import React from 'react'
import Slide from  "../components/Slide"
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <div className='container mt-5'>
        <Navbar/>
        <br />
        <Slide/>   
        <br />
        <br />
        <ProductList/>
    </div>
  )
}

export default Home
