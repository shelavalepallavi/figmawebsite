import React from 'react'
import './App.css'
import Home from './components/Home'
import NewArrivals from './components/NewArrivals'
import Categories from './components/Categories'
import Collections from './components/Collections'
import Discover from './components/Discover'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Home/>
      <NewArrivals/>
      <Categories/>
      <Collections/>
      <Discover/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
