import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'email' | 'text' | 'password';
    placeholder?: string;
    [x: string]: any; //cualquier cantidad de propiedadesde tipo string
}

export const MyTextInput = ( {label, ...props }:Props) => {

    const [ field] = useField(props);
    // en el field se encuentra el valor del input, el name, el onChange, onBlur, etc
    //en el meta los errores

    return (
        <>
            <label htmlFor={ props.id || props.name }>{label}</label>
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
            {/* se puede pasar el className en el ErrorMessage */}
        </>
    )
}
