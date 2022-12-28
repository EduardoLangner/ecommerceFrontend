import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { validateName, validateCPF, validateTelephone, validadeEmail } from '../../utils/regex.js'
import validator from 'validator'
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
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    
    const validate = () => {
        
        if(!validateName.test(name) || name === '') {
            setNameError(true)
            document.querySelector('.signup-input-name').style.borderBottom = '1.5px solid red'
        } else {
            setNameError(false)
            document.querySelector('.signup-input-name').style.borderBottom = '1.5px solid green'
        }

        if(!validateCPF.test(cpf) || cpf === '') {
            setCPFError(true)
            document.querySelector('.signup-input-cpf').style.borderBottom = '1.5px solid red'
        } else {
            setCPFError(false)
            document.querySelector('.signup-input-cpf').style.borderBottom = '1.5px solid green'
        }

        if(!validateTelephone.test(telephone) || telephone === '') {
            setTelephoneError(true)
            document.querySelector('.signup-input-telephone').style.borderBottom = '1.5px solid red'
        } else {
            setTelephoneError(false)
            document.querySelector('.signup-input-telephone').style.borderBottom = '1.5px solid green'
        }

        if(!validadeEmail.test(email) || email === '') {
            setEmailError(true)
            document.querySelector('.signup-input-email').style.borderBottom = '1.5px solid red'
        } else {
            setEmailError(false)
            document.querySelector('.signup-input-email').style.borderBottom = '1.5px solid green'
        }

        if(confirmPassword !== password || confirmPassword === '') {
            setConfirmPasswordError(true)
            document.querySelector('.signup-input-confirm-password').style.borderBottom = '1.5px solid red'
        } else {
            setConfirmPasswordError(false)
            document.querySelector('.signup-input-confirm-password').style.borderBottom = '1.5px solid green'
        }
    }

    const validatePassword = (value) => {
        
        if(validator.isStrongPassword(value, {minLength: 8})) {
            document.querySelector('.characters').style.color = 'green'
        } else {
            document.querySelector('.characters').style.color = 'red'
        }        
        
        if(validator.isStrongPassword(value, {minLowercase: 1})) {
            document.querySelector('.lowercase').style.color = 'green'
        } else {
            document.querySelector('.lowercase').style.color = 'red'
        }
        
        if(validator.isStrongPassword(value, {minUppercase: 1})) {
            document.querySelector('.uppercase').style.color = 'green'
        } else {
            document.querySelector('.uppercase').style.color = 'red'
        }
        
        if(validator.isStrongPassword(value, {minNumbers: 1})) {
            document.querySelector('.numbers').style.color = 'green'
        } else {
            document.querySelector('.numbers').style.color = 'red'
        }
        
        if(validator.isStrongPassword(value, {minSymbols: 1})) {
            document.querySelector('.symbols').style.color = 'green'
        } else {
            document.querySelector('.symbols').style.color = 'red'
        }
    }
           
    return (
        <div className='create-account'>
            <script src="/js/jquery.min.js"></script>
            <div className='create-account-content'>
                <div className='logo-create-account'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='create-account-form'>
                    <form className='inputs-signup'>

                        <div className='signup-input-name'>
                            <i className='bi bi-person icon-name'>
                                <input type='text' placeholder='Nome completo*' 
                                    className='input-name' 
                                    value={name} 
                                    onChange={(e) => {setName(e.target.value)}}>
                                </input>
                            </i>
                        </div>{nameError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='name-error'>Por favor, insira seu nome completo.</p></i></div>}
                        <div  className='signup-input-cpf'>
                            <i className='bi bi-person-vcard icon-cpf'>
                                <input type='text' placeholder='CPF*'
                                    className='input-cpf'
                                    value={cpf}
                                    onChange={(e) => {setCPF(e.target.value)}}>
                                </input>
                            </i>
                        </div>{cpfError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='cpf-error'>O CPF inserido não é inválido</p></i></div>}


                        <div className='signup-input-telephone'>
                            <i className='i className="bi bi-telephone icon-telephone'>
                                <input type='tel' placeholder='Telefone*' className='input-telephone' 
                                    value={telephone}  
                                    maxLength='15'
                                    onChange={(e) => {setTelephone(e.target.value)}}>
                                </input>
                            </i>
                        </div>{telephoneError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='telephone-error'>O telefone inserido não é inválido</p></i></div>}
                       
                        <div className='signup-input-email'>
                            <i className='bi bi-envelope icon-email'>
                                <input type='email' placeholder='E-mail*' 
                                    className='input-email' 
                                    value={email} 
                                    onChange={(e) => {setEmail(e.target.value)}}>
                                    </input>
                                </i>
                        </div>{emailError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='email-error'>O E-mail inserido não é inválido</p></i></div>}
                        
                        <div className='signup-input-password'>
                            <i className='bi bi-lock icon-password'>
                                <input type='password' placeholder='Crie sua senha*' 
                                    className='input-password' 
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}>
                                </input>
                            </i>
                        </div>
                        <div className='requisites-password'>
                            <p className='title'>A senha deve atender os seguintes requisitos: </p><br />
                            <div className='requisites-characters'>
                                <p className='characters'>● No mínimo 8 caracteres</p>
                            </div>
                            <div className='requisites-uppercase'>
                                <p className='uppercase'>● pelo menos 1 letra maiúscula (A...Z)</p>
                            </div>
                            <div className='requisites-lowercase'>
                                <p className='lowercase'>● pelo menos 1 letra minúscula (a...z)</p>
                            </div>
                            <div className='requisites-number'>
                                <p className='numbers'>● pelo menos 1 número (0...9)</p>
                            </div>
                            <div className='requisites-symbol'>
                                <p className='symbols'>● pelo menos 1 caractere especial</p>
                            </div>
                        </div>

                        <div className='signup-input-confirm-password'>
                            <i className='bi bi-lock icon-password'>
                                <input type='password' placeholder='Confirme sua senha*' 
                                    className='input-password' 
                                    value={confirmPassword} 
                                    onChange={(e) => {setConfirmPassword(e.target.value)}}>
                                </input>
                            </i>
                        </div>{confirmPasswordError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='email-error'>As senhas não conferem</p></i></div>}
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