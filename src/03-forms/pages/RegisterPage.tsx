
import {  FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialState = {
        name: '',
        email: '',
        password1: '',
        password2: ''
    }

export const RegisterPage = () => {

    const { 
        formData, onChange, resetForm, isValidEmail,
        name, email, password1, password2
    } 
        = useForm(initialState)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

  return (
    <div>
        <h1>Register Page</h1>
        <form 
            noValidate 
            onSubmit={onSubmit}
        >
            <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={onChange}
                name="name"
                className={`${name.trim().length <= 0 && 'has-error'}`}
            />

            { name.trim().length <= 0 && <span>Este campo es necesario</span>}

            <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={onChange}
                name="email"
                className={`${!isValidEmail(email) && 'has-error'}`}
            />

            { !isValidEmail(email) && <span>Email no es valido</span>}

            <input 
                type="password" 
                placeholder="Password" 
                value={password1}
                onChange={onChange}
                name="password1"
                autoComplete='off'
            />

            { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contrasena tiene que tener mas de 6 caracteres </span>}

            <input 
                type="password" 
                placeholder="Password Confirmation" 
                value={password2}
                onChange={onChange}
                name="password2"
                autoComplete='off'

            />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password2.trim().length > 0 && password1 !== password2 && <span>Las contrasenas deben ser iguales</span>}

            <button type="submit">Create</button>
            <button type="button" onClick={resetForm}>Reset Form</button>

        </form>

    </div>
  )
}


