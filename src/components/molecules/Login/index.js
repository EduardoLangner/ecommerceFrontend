import React, { useState } from 'react'
import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import './index.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eyePassword, setEyePassword] = useState('eye')
    // const [error, setError] = useState(false)

    const visiblePassword = () => {

        const password = document.querySelector('.input-password')

        if(password.type === 'password') {
            password.type = 'text'
            setEyePassword('eye-slash')
        } else {
            password.type = 'password'
            setEyePassword('eye')
        }
    }

    // const validateInputs = () => {
    //     if(email === '' || password === '') {
    //         setError(true)
    //         document.querySelector('.login-input-email').style.borderBottom = '1.5px solid red'
    //         document.querySelector('.login-input-password').style.borderBottom = '1.5px solid red'
    //     } else if(email !== '' || password !== '') {
    //         setError(false)
    //         document.querySelector('.login-input-email').style.borderBottom = '1.5px solid black'
    //         document.querySelector('.login-input-password').style.borderBottom = '1.5px solid black'
    //     }
    // }

    return (
        <div className='login'>
            <div className='login-container'>
                <div className='login-content'>
                    <div className='logo-login'>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <div className='inputs-login-form'>
                        <form className='form-inputs-login'>
                            <div className='login-input-email'>
                                <i className='bi bi-envelope icon-email'>
                                    <input type='email' placeholder='E-mail' className='input-email'
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}>
                                    </input>
                                </i>
                            </div>
                            
                            <div className='login-input-password'>
                                <i className='bi bi-lock icon-password'>
                                    <input type='password' placeholder='Password' className='input-password'
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}>
                                    </input>
                                </i>
                                <div className='icon-eye-password-login'>
                                    <i onClick={visiblePassword} className={`bi bi-${eyePassword}`}></i>
                                </div>
                            </div>
                        </form>
                        <button className='login-button' type='submit'>Login</button>
                        <div className='login-footer'>
                            <p className='login-click'>Não possui cadastro? <Link className='click' to='/signup'>Clique aqui</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login