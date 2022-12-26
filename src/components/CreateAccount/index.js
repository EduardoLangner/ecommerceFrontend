import React from 'react'
import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { validateName, validateCPF, validateTelephone, validadeEmail, validatePassword, validateConfirmPassword } from '../../utils/regex.js'
import './index.css'

const CreateAccount = () => {

    const [name, setName] = useState('')
    const [cpf, setCPF] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [nameError, setNameError] = useState(false)
    const [cpfError, setCPFError] = useState(false)
    const [telephoneError, setTelephoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const validate = () => {
        !validateName.test(name) ? setNameError(true) : setNameError(false)
        !validateCPF.test(cpf) ? setCPFError(true) : setCPFError(false)
        !validateTelephone.test(telephone) ? setTelephoneError(true) : setTelephoneError(false)
        !validadeEmail.test(email) ? setEmailError(true) : setEmailError(false)
        !validatePassword.test(password) ? setPasswordError(true) : setPasswordError(false)
        !validateConfirmPassword.test(confirmPassword) ? setConfirmPasswordError(true) : setConfirmPasswordError(false)
    }        

    return (
        <div className='create-account'>
            <div className='create-account-content'>
                <div className='logo-create-account'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='create-account-form'>
                    <form className='inputs-signup'>
                        <div className='signup-input-name'>
                            <i className='bi bi-person icon-name'><input type='text' placeholder='Nome completo*' className='input-name' 
                                value={name} onChange={(e) => {setName(e.target.value)}}></input></i>
                        </div>
                        {nameError && <p className='name-error'>Nome inválido</p>}
                        <div className='signup-input-cpf'>
                            <i className='bi bi-person-vcard icon-cpf'><input type='text' placeholder='CPF (000.000.000-00)*' className='input-cpf' 
                                value={cpf} onChange={(e) => {setCPF(e.target.value)}}></input></i>
                        </div>
                        {cpfError && <p className='cpf-error'>CPF inválido</p>}
                        <div className='signup-input-telephone'>
                            <i className='i class="bi bi-telephone icon-telephone'><input type='tel' placeholder='Telefone celular*' className='input-telephone' 
                                value={telephone} onChange={(e) => {setTelephone(e.target.value)}}></input></i>
                        </div>
                        {telephoneError && <p className='telephone-error'>Telefone inválido</p>}
                        <div className='signup-input-email'>
                            <i className='bi bi-envelope icon-email'><input type='email' placeholder='E-mail*' className='input-email' 
                                value={email} onChange={(e) => {setEmail(e.target.value)}}></input></i>
                        </div>
                        {emailError && <p className='email-error'>E-mail inválido</p>}
                        <div className='signup-input-password'>
                            <i className='bi bi-lock icon-password'><input type='password' placeholder='Crie sua senha*' className='input-password' 
                                value={password} onChange={(e) => {setPassword(e.target.value)}}></input></i>
                        </div>
                        {passwordError && <p className='password-error'>Senha inválida</p>}
                        <div className='signup-input-confirmPassword'>
                            <i className='bi bi-lock icon-password'><input type='password' placeholder='Confirme sua senha*' className='input-password' 
                                value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}></input></i>
                        </div>
                        {confirmPasswordError && <p className='confirm-password-error'>Senha inválida</p>}
                    </form>
                    <button className='create-account-button' type='submit' onClick={validate}>Criar conta</button>
                </div>
                <div className='create-account-footer'>
                    <p className='sign-click'>Já possui cadastro? <Link className='click' to='/signin'>Clique aqui</Link></p>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount