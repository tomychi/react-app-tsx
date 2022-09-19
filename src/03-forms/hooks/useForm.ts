import { ChangeEvent, useState } from "react";


// recibo un tipo de dato generico, que puede ser cualquier cosa
export const useForm = <T>( initState: T ) => {


    const [formData, setFormData] = useState(initState);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const resetForm = () => {
        setFormData({...initState});
    };

    const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }


    return {
        ...formData, // desestructuro todo lo que viene en el formData
        // es como: 
        // name: formData.name,
        // email: formData.email,
        // password1: formData.password1,
        

        // Properties
        formData,

        // Methods
        isValidEmail,
        onChange,
        resetForm
    }
}
