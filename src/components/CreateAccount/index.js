import React from 'react'
import { useState, useEffect } from 'react'
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

        if(!validatePassword.test(password) || password === '') {
            setPasswordError(true)
            document.querySelector('.signup-input-password').style.borderBottom = '1.5px solid red'
        } else {
            setPasswordError(false)
            document.querySelector('.signup-input-password').style.borderBottom = '1.5px solid green'
        }

        if(!validateConfirmPassword.test(confirmPassword)){
            setPasswordError(true)
            document.querySelector('.signup-input-confirm-password').style.borderBottom = '1.5px solid red'
        } else if (password !== confirmPassword || confirmPassword === '') {
            setPasswordError(true)
            document.querySelector('.signup-input-confirm-password').style.borderBottom = '1.5px solid red'
        } else {
            setPasswordError(false)
            document.querySelector('.signup-input-confirm-password').style.borderBottom = '1.5px solid green'
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
                        </div>{nameError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='name-error'>Nome inválido</p></i></div>}
                        <div  className='signup-input-cpf'>
                            <i className='bi bi-person-vcard icon-cpf'>
                                <input type='text' placeholder='CPF*'
                                    className='input-cpf'
                                    value={cpf}
                                    onChange={(e) => {setCPF(e.target.value)}}>
                                </input>
                            </i>
                        </div>{cpfError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='cpf-error'>CPF inválido</p></i></div>}


                        <div className='signup-input-telephone'>
                            <i className='i className="bi bi-telephone icon-telephone'>
                                <input type='tel' placeholder='Telefone celular*' className='input-telephone' 
                                    value={telephone}  
                                    maxLength='15'
                                    onChange={(e) => {setTelephone(e.target.value)}}>
                                </input>
                            </i>
                        </div>{telephoneError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='telephone-error'>Telefone inválido</p></i></div>}
                       
                        <div className='signup-input-email'>
                            <i className='bi bi-envelope icon-email'>
                                <input type='email' placeholder='E-mail*' 
                                    className='input-email' 
                                    value={email} 
                                    onChange={(e) => {setEmail(e.target.value)}}>
                                    </input>
                                </i>
                        </div>{emailError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='email-error'>E-mail inválido</p></i></div>}
                        
                        <div className='signup-input-password'>
                            <i className='bi bi-lock icon-password'>
                                <input type='password' placeholder='Crie sua senha*' 
                                    className='input-password' 
                                    value={password} 
                                    onChange={(e) => {setPassword(e.target.value)}}>
                                </input>
                            </i>
                        </div>{passwordError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='password-error'>Senha inválida</p></i></div>}
                        
                        <div className='signup-input-confirm-password'>
                            <i className='bi bi-lock icon-password'>
                                <input type='password' placeholder='Confirme sua senha*' 
                                    className='input-password' 
                                    value={confirmPassword} 
                                    onChange={(e) => {setConfirmPassword(e.target.value)}}>
                                </input>
                            </i>
                        </div>
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