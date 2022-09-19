import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikYUpPage = () => {




    // touched es si el campo fue tocado o no
    const { handleSubmit, 
        errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        }, // se hace cuando todas las validaciones son correctas

        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Campo requerido')
                .max(15, 'Debe de tener 15 caracteres o menos'),
            lastName: Yup.string()
                .required('Campo requerido')
                .max(10, 'Debe de tener 10 caracteres o menos'),
            email: Yup.string()
                .required('Campo requerido')
                .email('Email no valido')
        })

    });

    return (
        <div>
            <h1>Formik Yup</h1>

            <form 
                onSubmit={handleSubmit}
                noValidate
            >
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    {...getFieldProps('firstName')} 
                />
                { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    {...getFieldProps('lastName')}
                />
                { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    {...getFieldProps('email')}
                />
                { touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
