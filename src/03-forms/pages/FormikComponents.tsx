import { Formik ,Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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
                            <label htmlFor='firstName'>First Name</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name='firstName' component="span" />

                            <label htmlFor='lastName'>Last Name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName' component="span"/>

                            <label htmlFor='email'>Email Address</label>
                            <Field name='email' type='email' />
                            <ErrorMessage name='email' component="span"/>

                            <label htmlFor='jobType'>Job type</label>
                            <Field name='jobType' as="select">
                                <option value=''>Select a job type</option>
                                <option value='designer'>Designer</option>
                                <option value='developer'>Developer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-junior'>IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component="span"/>



                            <label>
                                <Field name='terms' type='checkbox' />
                                Terms and conditions
                            </label>
                            <ErrorMessage name='terms' component="span"/>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

            </Formik>

            

        </div>
    )
}
