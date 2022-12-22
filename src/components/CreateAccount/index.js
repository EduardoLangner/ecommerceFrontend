import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './index.css'

const CreateAccount = () => {
    return (
        <div className='create-account'>
            <div className='create-account-content'>
                <div className='logo-create-account'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='create-account-form'>
                    <form>
                        <i className='bi bi-person icon-name'><input type='text' placeholder='Nome' className='input-name'></input></i>
                        <i className='bi bi-envelope icon-email'><input type='email' placeholder='Email' className='input-email'></input></i>
                        <i className='bi bi-lock icon-password'><input type='password' placeholder='Password' className='input-password'/></i>
                        <i className='bi bi-lock icon-password'><input type='password' placeholder='Confirm Password' className='input-password'/></i>
                        <button className='create-account-button' type='submit'>Criar conta</button>
                    </form>
                </div>
                <div className='create-account-footer'>
                    <p className='sign-click'>Já possui cadastro? <Link className='click' to='/'>Clique aqui</Link></p>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount