import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextArea, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'

console.log(formJson);

const initialValues: { [key: string]: any } = {};

const requiredFields: { [key: string]: any } = {};

for ( const input of formJson ) {
    initialValues[ input.name ]  = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido');
        }
        if( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `Minimo de ${(rule as any).value || 2} caracteres`);
        }
        if( rule.type === 'maxLength' ) {
            schema = schema.max( (rule as any).value || 15, `Maximo de ${(rule as any).value || 15} caracteres`);
        }
        if( rule.type === 'email' ) {
            schema = schema.email('No corresponde a un formato de email');
        }

        // ... otras reglas
    }

    requiredFields[ input.name ] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik 
            initialValues={ initialValues }
            onSubmit={ ( values ) => {
                console.log(values);
            }}
            validationSchema={ validationSchema }
        >
            { (formik) => (
                <Form>

                    {formJson.map( ({ type, name, placeholder, label, options}) => {

                        if ( type === "input" || type === "password" || type === "email") {
                            
                            return <MyTextInput 
                                        key={ name }
                                        type={( type as any )} 
                                        name={ name } 
                                        label={ label } 
                                        placeholder={ placeholder } />
                        } else if ( type === "area") {
                            <MyTextArea 
                                key={ name }
                                label={ label }
                                name={ name }
                            />
                        }
                        else if ( type === "select" ) {
                            
                            return <MySelect 
                                        key={ name }
                                        label={ label } 
                                        name={ name } 
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map( ( {id, label} ) => {
                                                return <option key={ id } value={ id }>{ `${id}: ${label}` }</option>
                                            })
                                        }
                                    </MySelect>
                        } else if ( type === "checkbox") {
                            return <MyCheckbox
                                key={ name }
                                label= { label }
                                name = { name }
                            />

                        }

                        throw new Error(`El type: ${ type }, no es valido `);
 
                        // return <h1>Type: { type } no es soportado</h1>
                    })}

                    <button type='submit'>Submit</button>

                </Form>
            )}
        </Formik>

    </div>
  )
}
