import React from 'react'
import { useState } from 'react'
import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { validateName, validateTelephone, validadeEmail } from '../../../utils/regex.js'
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
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [invisible, setInvisible] = useState('invisible')
    const [eyePassword, setEyePassword] = useState('eye')
    const [eyeConfirmPassword, setEyeConfirmPassword] = useState('eye')
    
    
    const validateInputs = () => {
        
        if(!validateName.test(name) || name === '') {
            setNameError(true)
            document.querySelector('.signup-input-name').style.borderBottom = '1.5px solid red'
        } else {
            setNameError(false)
            document.querySelector('.signup-input-name').style.borderBottom = '1.5px solid green'
        }

        if(isValidCPF(cpf) === false || cpf === '') {
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

        if(password === '') {
            setPasswordError(true)
            document.querySelector('.signup-input-password').style.borderBottom = '1.5px solid red'
        } else if(password !== ''){
            setPasswordError(false)
            document.querySelector('.signup-input-password').style.borderBottom = '1.5px solid green'
        }

        if(confirmPassword !== password || confirmPassword === '') {
            setConfirmPasswordError(true)
            document.querySelector('.signup-input-confirm-password').style.borderBottom = '1.5px solid red'       
        } else {
            setConfirmPasswordError(false)
            document.querySelector('.signup-input-confirm-password').style.borderBottom = '1.5px solid green'
            console.log('entrou')
        }

    }

    const validatePassword = (value) => {

        if(validator.isStrongPassword(value, {minLength: 1, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0})){
            document.querySelector('.uppercase').style.backgroundColor = 'rgb(229, 255, 241)'
            document.querySelector('.uppercase').style.color = 'rgb(39, 178, 100)'
        } else {
            document.querySelector('.uppercase').style.backgroundColor = 'rgb(255, 229, 230)'
            document.querySelector('.uppercase').style.color = 'rgb(231, 38, 38)'
        }
        
        if(validator.isStrongPassword(value, {minLength: 1, minLowercase: 1, minUppercase: 0, minNumbers: 0, minSymbols: 0})){
            document.querySelector('.lowercase').style.backgroundColor = 'rgb(229, 255, 241)'
            document.querySelector('.lowercase').style.color = 'rgb(39, 178, 100)'
        } else {
            document.querySelector('.lowercase').style.backgroundColor = 'rgb(255, 229, 230)'
            document.querySelector('.lowercase').style.color = 'rgb(231, 38, 38)'
        }

        if(validator.isStrongPassword(value, {minLength: 1, minLowercase: 0, minUppercase: 0, minNumbers: 1, minSymbols: 0})){
            document.querySelector('.numbers').style.backgroundColor = 'rgb(229, 255, 241)'
            document.querySelector('.numbers').style.color = 'rgb(39, 178, 100)'
        } else {
            document.querySelector('.numbers').style.backgroundColor = 'rgb(255, 229, 230)'
            document.querySelector('.numbers').style.color = 'rgb(231, 38, 38)'
        }

        if(validator.isStrongPassword(value, {minLength: 1, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 1})){
            document.querySelector('.symbols').style.backgroundColor = 'rgb(229, 255, 241)'
            document.querySelector('.symbols').style.color = 'rgb(39, 178, 100)'
        } else {
            document.querySelector('.symbols').style.backgroundColor = 'rgb(255, 229, 230)'
            document.querySelector('.symbols').style.color = 'rgb(231, 38, 38)'
        }

        if(validator.isStrongPassword(value, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})){
            document.querySelector('.characters').style.backgroundColor = 'rgb(229, 255, 241)'
            document.querySelector('.characters').style.color = 'rgb(39, 178, 100)'
            document.querySelector('.signup-input-password').style.borderBottom = '1.5px solid green'
        } else {
            document.querySelector('.characters').style.backgroundColor = 'rgb(255, 229, 230)'
            document.querySelector('.characters').style.color = 'rgb(231, 38, 38)'
            document.querySelector('.signup-input-password').style.borderBottom = '1.5px solid red'
        }

    }        

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

    const visibleConfirmPassword = () => {

        const password = document.querySelector('.input-confirm-password')

        if(password.type === 'password') {
            password.type = 'text'
            setEyeConfirmPassword('eye-slash')
        } else {
            password.type = 'password'
            setEyeConfirmPassword('eye')
        }
    }

    const maskCpf = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }

    const isValidCPF = (cpf) => {	

        cpf = cpf.replace(/\.|-/g, '');

        var Soma
        var Resto
        Soma = 0

        if (cpf === '00000000000'
         || cpf === '11111111111' 
         || cpf === '22222222222'
         || cpf === '33333333333'
         || cpf === '44444444444'
         || cpf === '55555555555'
         || cpf === '66666666666'
         || cpf === '77777777777'
         || cpf === '88888888888'
         || cpf === '99999999999') {
            return false
        }

        for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
        Resto = (Soma * 10) % 11

        if ((Resto === 10) || (Resto === 11))  Resto = 0
        if (Resto !== parseInt(cpf.substring(9, 10)) ) return false

        Soma = 0
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
        Resto = (Soma * 10) % 11

        if ((Resto === 10) || (Resto === 11))  Resto = 0
        if (Resto !== parseInt(cpf.substring(10, 11) ) ) return false
        return true

    }

    const maskTelephone = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    }
           
    return (
        <div className='create-account'>
            <div className='create-account-container'>
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
                                        maxLength='14'
                                        onChange={(e) => {setCPF(maskCpf(e.target.value))}}>
                                    </input>
                                </i>
                            </div>{cpfError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='cpf-error'>O CPF inserido não é inválido</p></i></div>}

                            <div className='signup-input-telephone'>
                                <i className='i className="bi bi-telephone icon-telephone'>
                                    <input type='tel' placeholder='Telefone*' className='input-telephone'
                                        value={telephone}  
                                        maxLength='15'
                                        onChange={(e) => {setTelephone(maskTelephone(e.target.value))}}>
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
                                        onChange={(e) => {setPassword(e.target.value, validatePassword(e.target.value))}}
                                        onInput={() => {setInvisible('visible')}}>
                                    </input>
                                    <div className='icon-eye-password'>
                                        <i onClick={visiblePassword} className={`bi bi-${eyePassword}`}></i>
                                    </div>
                                </i>
                            </div>{passwordError}
                            <div className={`requisites-password-${invisible}`}>
                                <div className='requisites-characters'>
                                    <p className='characters'>No mínimo 8 caracteres</p>
                                </div>
                                <div className='requisites-uppercase'>
                                    <p className='uppercase'>1 letra maiúscula</p>
                                </div>
                                <div className='requisites-lowercase'>
                                    <p className='lowercase'>1 letra minúscula</p>
                                </div>
                                <div className='requisites-number'>
                                    <p className='numbers'>1 número</p>
                                </div>
                                <div className='requisites-symbol'>
                                    <p className='symbols'>1 caractere especial</p>
                                </div>
                            </div>

                            <div className='signup-input-confirm-password'>
                                <i className='bi bi-lock icon-confirm-password'>
                                    <input type='password' placeholder='Confirme sua senha*'
                                        className='input-confirm-password'
                                        value={confirmPassword}
                                        onChange={(e) => {setConfirmPassword(e.target.value)}}>
                                    </input>
                                    <div className='icon-eye-confirm-password'>
                                            <i onClick={visibleConfirmPassword} className={`bi bi-${eyeConfirmPassword}`}></i>
                                    </div>
                                </i>
                            </div>{confirmPasswordError && <div className='error'><i className="bi bi-exclamation-triangle triangle"><p className='confirm-password-error'>As senhas não coincidem</p></i></div>}
                        </form>
                        <button className='create-account-button' type='submit' onClick={validateInputs}>Criar conta</button>
                    </div>
                    <div className='create-account-footer'>
                        <p className='sign-click'>Já possui cadastro? <Link className='click' to='/signin'>Clique aqui</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount