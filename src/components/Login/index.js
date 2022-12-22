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
                    <form>
                        <i className='bi bi-envelope icon-email'><input type='email' placeholder='Email' className='input-email'></input></i>
                        <i className='bi bi-lock icon-password'><input type='password' placeholder='Password' className='input-password'/></i>
                        <button className='login-button' type='submit'>Login</button>
                    </form>
                </div>
                <div className='login-footer'>
                    <p className='sign-click'>Não possui cadastro? <Link className='click' to='/'>Clique aqui</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login