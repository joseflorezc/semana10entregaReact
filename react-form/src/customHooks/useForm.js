import { useState } from "react";


const useForm = (props, validateForm) => {
    
    const [errors, setErrors] = useState({});
     
    const [values, setValues] = useState({
        [props.dataUs.usuario]:"",
        [props.dataPas.password]:"",
        [props.dataConf.confPassword]:""

    });

    //  username:"",
    //  email:"",
    //  password:"",
    //  confirmPassword:""
    const handleChange = (evt) => {
        console.log(evt);
        setValues(values =>({
            ...values, 
            [evt.target.name]: evt.target.value
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setErrors(validateForm(values));
    }

    return {handleChange, handleSubmit, errors, values};

};

export default useForm;