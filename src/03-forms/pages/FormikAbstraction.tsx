import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import { MyCheckbox, MyTextInput, MySelect} from '../components'; // busca el inddex por defecto

import '../styles/styles.css';


export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstractions</h1>

            <Formik  
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .required('Campo requerido')
                        .max(15, 'Debe de tener 15 caracteres o menos'),
                    lastName: Yup.string()
                        .required('Campo requerido')
                        .max(10, 'Debe de tener 10 caracteres o menos'),
                    email: Yup.string()
                        .required('Campo requerido')
                        .email('Email no valido'),
                    terms: Yup.boolean()
                        // tiene que ser algun valor dentro del arreglo
                        .oneOf([true], 'Debe de aceptar los terminos y condiciones'),
                    jobType: Yup.string()
                        .required('Campo requerido')
                        // .oneOf(['designer', 'developer', 'it-senior', 'it-junior'], 'Debe de seleccionar un tipo de trabajo')
                        .notOneOf(['it-junior'], 'No puedes ser junior')
                })}
            >

                {
                    formik => (
                        <Form>

                            <MyTextInput 
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder="John"
                            />

                            <MyTextInput 
                                label="Last Name"
                                name="lastName"
                                type="text"
                                placeholder="Herrera"
                            />

                            <MyTextInput 
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="ejemplo@gmail.com"
                            />
                            
                            <MySelect label='jobType' name='jobType'>
                                <option value=''>Select a job type</option>
                                <option value='designer'>Designer</option>
                                <option value='developer'>Developer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-junior'>IT Junior</option>
                            </MySelect>

                            <MyCheckbox 
                                label="Terms and Conditions"
                                name="terms"
                            />


                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

            </Formik>

            

        </div>
    )
}
