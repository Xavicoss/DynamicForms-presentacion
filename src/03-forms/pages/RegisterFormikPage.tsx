import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput} from '../components'

import '../styles/styles.css'



export const RegisterFormikPage = () => {




  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                repeatpassword: '',
            }}
            onSubmit={ ( values ) => {
                console.log(values);
            }}
            onReset={ ( values ) => {
                console.log(values);
            }}
            validationSchema={ Yup.object({
                name: Yup.string()
                    .min(2, 'Debe de tener minimo 2 caracteres')
                    .max(15, 'Debe de tener maximo 15 caracteres')
                    .required('Requerido'),
                email: Yup.string()
                    .email('Email invalido')
                    .required('Requerido'),
                password: Yup.string()
                    .min(6, 'Debe de tener minimo 6 caracteres')
                    .required('Requerido'),
                repeatpassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
                    .required('Requerido'),

            })}
        >
             {
                (formik) => (
                    <Form noValidate>

                        <MyTextInput 
                            label="Name" 
                            name='name' 
                            placeholder='Name'
                        />
                        <MyTextInput 
                            label="Email Address" 
                            name='email' 
                            placeholder='Email'
                            type='email'
                        />
                        <MyTextInput 
                            label="Password" 
                            name='password' 
                            placeholder='Password'
                        />
                        <MyTextInput 
                            label="Repeat Password" 
                            name='repeatpassword' 
                            placeholder='Repeat Password'
                        />

            
                        <button type="submit">Submit</button>

                        <button type="reset">Reset Form</button>
                    </Form>
                )
            }

        </Formik>
    </div>
  )
}
