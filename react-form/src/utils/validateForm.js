
export default function validateForm (values){

    const err = {};

    // if(values.username.lenght > 0){
    //     err.username = "Valid name :D";
    // }

    // if(values.password.lenght < 5){
    //    err.password = "Lenght of password is to short";
    // }

    //solo requieren una validación, por eso dejo esta y ya
    if(values.password !== values.confirmPassword){
        err.password = "passwords must match";
    }

    return err;

}