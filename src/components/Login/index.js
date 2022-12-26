import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './index.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='login-content'>
                <div className='logo-login'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='login-input'>
                    <form className='inputs-signin'>
                        <div className='login-input-email'>
                            <i className='bi bi-envelope icon-email'><input type='email' placeholder='E-mail' className='input-email'></input></i>
                        </div>
                        <div className='login-input-password'>
                            <i className='bi bi-lock icon-password'><input type='password' placeholder='Password' className='input-password'></input></i>
                        </div>
                        <button className='login-button' type='submit'>Login</button>
                    </form>
                </div>
                <div className='login-footer'>
                    <p className='sign-click'>Não possui cadastro? <Link className='click' to='/signup'>Clique aqui</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login