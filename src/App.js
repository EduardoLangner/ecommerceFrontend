import React from 'react'
import NavBar from './components/NavBar'
import CardCarousel from './components/CardCarousel'
import './App.css'

function App() {

  return (
      <React.StrictMode>
        <div className='app'>
          <div className='nav'>
            <NavBar />
          </div>
          <section className='for-you'>
            <h2 className='for-you-title'>Destaques</h2>
            <div className='card-carousel'>
              <CardCarousel />
            </div>  
          </section>
          <section className='best-sellers'>
            <h2 className='best-sellers-title'>Mais Vendidos</h2>
            <div className='card-carousel'>
              <CardCarousel />
            </div>  
          </section>  
          <section className='launch'>
            <h2 className='launch-title'>Lançamentos</h2>
            <div className='card-carousel'>
              <CardCarousel />
            </div>  
          </section> 
        </div>
      </React.StrictMode>
  )
}

export default App