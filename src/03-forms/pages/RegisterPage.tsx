
import { FormEvent } from 'react'

import { useForm } from '../hooks/useForm'

import '../styles/styles.css'



export const RegisterPage = () => {

    const { formData, onChange, isValidEmail, name, email, password1, password2, resetForm } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }


  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={ onSubmit }>
            <input className={ `${name.trim().length <= 0 && 'has-error'}`} name='name' type="text" placeholder="Name" value={ name } onChange={ onChange } />

            { name.trim().length <= 0 && <span>Este campo es necesario</span> }

            <input className={ `${!isValidEmail(email) && 'has-error'}` } name='email' type="email" placeholder="Email" value={ email } onChange={ onChange }/>

            { !isValidEmail(email) && <span>Email no es valido</span> }

            <input name='password1' type="password" placeholder="Password" value={ password1 } onChange={ onChange }/>

            { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
            { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contrasena tiene que tener minimo 6 caracteres</span> }

            <input name='password2' type="password" placeholder="Repeat Password" value={ password2 } onChange={ onChange }/>

            { password2.trim().length <= 0 &&  <span>Este campo es necesario</span> }
            { password2.trim().length > 0 && password1 !== password2 && <span>Las contrasenas deben de ser iguales</span> }

            <button type="submit">Create</button>

            <button type="button" onClick={ resetForm }>Reset</button>


        </form>
    </div>
  )
}
