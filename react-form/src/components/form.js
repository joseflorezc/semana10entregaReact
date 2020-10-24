import React from 'react';
import useForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";

const Form = (props) => {

    const {handleChange, handleSubmit, errors} = useForm(props,validateForm);
    // console.log(errors); 
    //esto por alguna extraña razón no sirvió

    //{errors.username && <p>{errors.username}</p>} validación username
    //agregado bootstrap :D
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
        <h1>Register form</h1>
        <form onSubmit={handleSubmit}>
            <div>  
                <label htmlFor={props.usuario}> Username:</label>
                <input 
                type={props.dataUs.usuarioTipo}
                name={props.dataUs.usuario} 
                placeholder={props.dataUs.usuarioPlaceholder}
                onChange={handleChange}
                id={props.usuario} />
                
            </div>
            <div>  
                <label htmlFor={props.dataPas.password}> Password:</label>
                <input 
               type={props.dataPas.passwordTipo} 
                name={props.dataPas.password} 
                placeholder={props.dataPas.passwordPlaceholder}  
                onChange={handleChange} 
                id={props.dataPas.password} />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>  
                <label htmlFor={props.dataConf.confPassword}> Confirm Pasword:</label>
               <input 
                type={props.dataConf.passwordTipo} 
                name={props.dataConf.confPassword} 
                placeholder={props.dataConf.passwordPlaceholder} 
                onChange={handleChange} 
                id={props.dataConf.confPassword}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button>Send</button>
        </form>
        </div>
    </div>
    )  
    

    //lo que habíamos hecho en clase
    
}

export default Form;