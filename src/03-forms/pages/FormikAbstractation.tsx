import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextArea, MyTextInput} from '../components'

import '../styles/styles.css'

export const FormikAbstractation = () => {

  return (
    <div>
        <h1>Form Ananmesis</h1>

        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',
            }}
            onSubmit={ ( values ) => {
                console.log(values);
            }}
            validationSchema={ Yup.object({
                firstName: Yup.string()
                    .max(15, 'Debe de tener minimo 15 caracteres')
                    .required('Requerido'),
                lastName: Yup.string()
                    .max(15, 'Debe de tener minimo 15 caracteres')
                    .required('Requerido'),
                email: Yup.string()
                    .email('Email invalido')
                    .required('Requerido'),
                terms: Yup.boolean()
                    .oneOf([true], 'Debe aceptar los terminos'),
                jobType: Yup.string()
                    .notOneOf( ['it-jr'], 'Esta opcion no es permitida')
                    .required('Requerido'),

            })}
        >
            {
                (formik) => (
                    <Form>
                        <h1>IDENTIFICACION</h1>
                        <MyTextInput 
                            label="Nombres" 
                            name='firstName' 
                            placeholder='Nombres'
                        />
                        <MyTextInput 
                            label="Apellidos" 
                            name='lastName' 
                            placeholder='Apellidos'
                        />
                        <MySelect label='Sexo' name="sexo" >
                            <option value="">Masculino</option>
                            <option value="developer">Femenino</option>
                        </MySelect> 

                        <MyTextInput 
                            label="Lugar de Nacimiento" 
                            name='lugarDeNacimiento' 
                            placeholder='Lugar de Nacimento'
                        />

                        <MyTextInput 
                            label="Edad" 
                            name='edad' 
                            placeholder='Edad'
                        />      

                        <MyTextInput 
                            label="Nacionalidad" 
                            name='nacionalidad' 
                            placeholder='Nacionalidad'
                        />

                        <MyTextInput 
                            label="Telefono" 
                            name='telefono' 
                            placeholder='Telefono'
                        />

                        <MyTextInput 
                            label="Lugar de Nacimiento" 
                            name='lugarDeNacimiento' 
                            placeholder='Lugar de Nacimento'
                        />

                        <MyTextInput 
                            label="Ocupacion" 
                            name='ocupacion' 
                            placeholder='Ocupacion'
                        />

                        <h2>Datos Familiares (Padre)</h2>

                        <MyTextInput 
                            label="Nombre completo del padre" 
                            name='nombreDelPadre' 
                            placeholder='Nombre del padre'
                        />

                        <MyTextInput 
                            label="Edad" 
                            name='edadPadre' 
                            placeholder='Edad'
                        />

                        <MyTextInput 
                            label="Ocupacion" 
                            name='ocupacionPadre' 
                            placeholder='Ocupacion'
                        />

                        <MyTextInput 
                            label="Nacionalidad" 
                            name='nacionalidadPadre' 
                            placeholder='Nacionalidad'
                        />

                        <h2>Datos Familiares (Madre)</h2>

                        <MyTextInput 
                            label="Nombre completo de la madre" 
                            name='nombreDelPadre' 
                            placeholder='Nombre del padre'
                        />

                        <MyTextInput 
                            label="Edad" 
                            name='lugarDeNacimiento' 
                            placeholder='Lugar de Nacimento'
                        />

                        <MyTextInput 
                            label="Ocupacion" 
                            name='ocupacionMadre' 
                            placeholder='Ocupacion'
                        />

                        <MyTextInput 
                            label="Nacionalidad" 
                            name='nacionalidadMadre' 
                            placeholder='Nacionalidad'
                        />

                        <h1>Motivo de la consulta</h1>

                        <MyTextArea
                            label='Motivo de Consulta'
                            name='motivoConsulta'
                            placeholder='Motivo de la consulta'
                        />

                        <h2>Examenes realizados hasta la fecha</h2>

                        <MyCheckbox label='Sangre' name='sangre'/>
                        <MyCheckbox label='Orina' name='orina'/>
                        <MyCheckbox label='Heces' name='heces'/>
                        <MyCheckbox label='Otros' name='otros'/>

                        <h2></h2>

                        <MyTextArea
                            label='Tratamientos efectuados'
                            name='tratamientosEfectuados'
                            placeholder='Tratamientos Efectuados'
                        />

                        <MyTextArea
                            label='Otros problemas presentes'
                            name='otrosProblemasPresentes'
                            placeholder='Otros problemas presentes'
                        />

                        <h1>Aspecto Familiar</h1>

                        <MyTextArea
                            label='Grupo Familiar'
                            name='grupoFamiliar'
                            placeholder='Grupo Familiar'
                        />
            
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
            
        </Formik>


    </div>
  )
}
