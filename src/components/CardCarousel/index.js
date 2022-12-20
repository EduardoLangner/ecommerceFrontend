import React, { useRef } from 'react'
import Card from '../Card'
import './index.css'

const CardCarousel = () => {

    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= (carousel.current.offsetWidth / 4)
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += (carousel.current.offsetWidth / 4)
    } 

    return (
        <div className='carousel-content'>
          <div className='card-carousel'ref={carousel} >
            <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
            <div className='carousel-buttons'>
              <button onClick={handleLeftClick}><i className="bi bi-chevron-left carousel-buttons-style button-left"></i></button>
              <button onClick={handleRightClick}><i className="bi bi-chevron-right carousel-buttons-style button-right"></i></button>
            </div>
          </div>  
        </div>
    )
}

export default CardCarousel