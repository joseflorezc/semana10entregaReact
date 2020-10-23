import React from 'react';
import ReactDOM from "react-dom";
import SignForm from "./components/signForm";

    const datosUsuario ={
    
    usuario:"username", 
    usuarioPlaceholder:"Username",
    usuarioTipo:"text" 
    } 

    const datosPass = {
    password:"password", 
    passwordPlaceholder:"Password",
    passwordTipo:"password" 
    }

    const datosConfPass = {
        confPassword:"confirmPassword", 
        passwordPlaceholder:"Confirm Password",
        passwordTipo:"password" 
    }

ReactDOM.render(<SignForm dataUs={datosUsuario} dataPas={datosPass} dataConf={datosConfPass}/>, document.getElementById("root"));