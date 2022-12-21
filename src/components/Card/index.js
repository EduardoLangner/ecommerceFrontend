import React from 'react'
import Fone from '../../assets/fone.png'
import './index.css'

const Card = () => {
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='card-image'>
                    <img src={Fone} alt='fone' />
                </div>
                <div className='card-name'>
                    <h3>Nome</h3>
                </div>
                <div className='card-price'>
                    <h3>R$ 100,00</h3>
                </div>    
            </div>
        </div>
    )
}

export default Card