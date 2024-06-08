import React from 'react'
import './App.css'
import NavBarComponent from '../components/NavBarComponent'
import FooterComponent from '../components/FooterComponent'
import CardComponent from '../components/CardComponent'

function App() {

  return (
    <>
      <NavBarComponent/>
      <main className='flex flex-wrap justify-center gap-8 my-16'>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      </main>
      <FooterComponent/>
      
    </>
  )
}

export default App
