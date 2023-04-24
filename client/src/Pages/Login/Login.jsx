import React from 'react'
import './login.css';
import Logo from '../.././assets/logo.png'

function Login(){
    return (
        <div className='login'>
            <img src={Logo} className='logo' ></img>
            <div className='link-box'>
                <a className='glink'><i className="fa-brands fa-google" style={{color: "#ff0000"}}></i>Login With Google</a>
            </div>
        </div>
    )
}

export default Login;