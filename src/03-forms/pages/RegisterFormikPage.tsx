
import { Form, Formik } from 'formik';

import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormikPage = () => {


  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik 
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ (values) => {
                console.log(values);
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Campo requerido')
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .min(5, 'Debe de tener 5 caracteres o mas'),
                email: Yup.string()
                    .required('Campo requerido')
                    .email('Email no valido'),
                password1: Yup.string()
                    .required('Campo requerido')
                    .min(6, 'Debe de tener 6 caracteres o mas'),
                password2: Yup.string()
                    .required('Campo requerido')
                    .oneOf([Yup.ref('password1')], 'Las contraseñas deben de ser iguales')
            })}
        >
        {
            ({handleReset}) => (
                <Form>

                    <MyTextInput 
                        label="Nombre"
                        name="name"
                        type="text"
                        placeholder="John"
                    />

                    <MyTextInput 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="ejemplo@gmail.com"
                    />

                    <MyTextInput 
                        label="Password"
                        name="password1"
                        type="password"
                        placeholder="*******"
                    />

                    <MyTextInput 
                        label="Confirm Password"
                        name="password2"
                        type="password"
                        placeholder="*******"
                    />
                    <button type="submit">Create</button>
                    <button type="button" onClick={handleReset}>Reset Form</button>

            </Form>

            )
        }
        
        </Formik>

        

    </div>
  )
}


