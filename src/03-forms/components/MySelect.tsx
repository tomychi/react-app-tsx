import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any; //cualquier cantidad de propiedadesde tipo string
}

export const MySelect = ( {label, ...props }:Props) => {

    const [ field ] = useField(props);
    // en el field se encuentra el valor del input, el name, el onChange, onBlur, etc

    return (
        <>
            <label htmlFor={ props.id || props.name }>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
