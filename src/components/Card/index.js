import React from 'react'
import TesteImage from '../../assets/testenarguile.jpg'
import Eduardo from '../../assets/eduardo.jpg'
import './index.css'

const Card = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <img className="image" src={TesteImage} alt="Teste" />
                    {/* <img className="image" src={Eduardo} alt="Teste"/> */}
                </div>
                <div className="card-name">
                    <p>Nome</p>
                </div>
                <div className="card-preco">
                    <span className="preco-de">R$80,00</span>
                </div>
            </div>
        </div>
    )
}

export default Card