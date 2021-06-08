import React, {useState} from 'react'
import './Login.css'
import Title from "./Title/Title"
import Label from "./Label/Label"
import Input from "./Input/Input"

const Login = () => {

    const [user, setUser] = useState ('');
    const [password, setPassword] = useState ('');
    const [passwordError, setPasswordError] = useState (false);

    function handleChange (name, value) {
        if(name === 'usuario'){
            // necesito una variable para almacenar
            setUser(value)
        } else {
            if(value.length < 6){
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value)
            }
        }
    };

    // console.log('usuario:', user)
    // console.log('password:', password)

    function handleSubmit() {
        let account = {user, password}
        if(account) {
            console.log('account:', account)
        }
    };

    return (
        <div className="login-container">
            <Title text='¡Bienvenid@!'/>
            <Label text='Usuario'/>
            {/* <Input/> */}
            <Input attribute={{
                id: 'usuario',
                name:'usuario',
                type:'text',
                placeholder:'Ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            <Label text='Contraseña'/>
            {/* <Input/> */}
            <Input attribute={{
                id: 'contraseña',
                name:'contraseña',
                type:'password',
                placeholder:'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            param={passwordError}
            />
            {passwordError && 
            <label className="label-error">
                Contraseña invalida o incorrecta
            </label>
            }
            <div className="submit-button-container">
            <button className="submit-button" onClick={handleSubmit}>
                Ingresar
            </button>
            </div>
        </div>
    )
}

export default Login
