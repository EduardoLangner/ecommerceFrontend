import React from 'react'
import Logo from '../../assets/logo.png'
import MenuHamb from '../MenuHamb'
import Cart from '../Cart'
import Search from '../Search'
import Perfil from '../Perfil'
import './index.css'

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav-content">
                <div className="menu-hamb">
                    <MenuHamb />
                </div>
                <div className="nav-logo">
                    <a href="/" className="link">
                        <img src={Logo} alt="Logo" className="logo"/>
                    </a>
                </div>
                <div className="search">
                    <Search />
                </div>
                <div className="cart">
                    <Cart />
                </div>
                <div className="user">
                    <Perfil />
                </div>
            </div>
            <div className="border"></div>
        </nav>
    )
}

export default NavBar