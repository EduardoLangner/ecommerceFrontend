import React, { useRef } from 'react'
import NavBar from './components/NavBar'
import CardCarousel from './components/CardCarousel'
import './App.css'

function App() {

  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
      <React.StrictMode>
        <div className='nav'>
          <NavBar />
        </div>
        <div className='carousel-content' ref={carousel}>
          <div className='card-carousel'>
            <CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel /><CardCarousel />
          </div>  
          <div className='carousel-buttons'>
            <button onClick={handleLeftClick}><i class="bi bi-chevron-left"></i></button>
            <button onClick={handleRightClick}><i class="bi bi-chevron-right"></i></button>
          </div>
        </div>
      </React.StrictMode>
  )
}

export default App