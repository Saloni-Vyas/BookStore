import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactpage from '../components/Contactpage'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Contactpage/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
