import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import NavbarClassic from '../components/NavbarClassic';


function Singin() {

  const initialValues={

    user_name: "",
    user_surname: "",
    user_password: "",
    user_birth:Date(),
    user_email:"",
    user_phone:"",
    user_sex:"",
    user_street:"",
    postal:0,
    newsletter:"" 
};


const validationSchema = Yup.object().shape({
    user_name: Yup.string().min(3).max(15).required(),
    user_surname: Yup.string().min(3).max(15).required(),
    user_password: Yup.string().min(3).max(15).required(),
    user_birth: Yup.date().required(),
    user_email: Yup.string().min(3).max(15).required(),
    user_phone: Yup.string().min(10).max(15).required(),
    user_sex: Yup.string().min(3).max(15).required(),
    user_street: Yup.string().max(30).required(),
    postal: Yup.number().required(),
    newsletter: Yup.string().required()

});

const onSubmit = (data) =>{
  axios.post("http://localhost:3001/auth", data).then ((response)=>{
  console.log(data)
  });
};


  return (
    <div className='signin'>
      <NavbarClassic />
        
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <label>Nom:  </label>
                <ErrorMessage name='nom' component="span"/>
                <Field id="createuser" name="name" autoComplete="off"/>

                <label>Prénom:  </label>
                <ErrorMessage name='surname' component="span"/>
                <Field id="createuser" name="surname" autoComplete="off"/>

                <label>Mot de passe:  </label>
                <ErrorMessage name='passwors' component="span"/>
                <Field id="createuser" name="password" type="password" autoComplete="off"/>

                <label>Date de naissance:  </label>
                <ErrorMessage name='birth' component="span"/>
                <Field id="createuser" name="birth" autoComplete="off"/>

                <label>Email:  </label>
                <ErrorMessage name='email' component="span"/>
                <Field id="createuser" name="email" autoComplete="off"/>

                <label>Numéro de téléphone:  </label>
                <ErrorMessage name='phone' component="span"/>
                <Field id="createuser" name="phone" autoComplete="off"/>

                <label>Sexe:  </label>
                <ErrorMessage name='sexe' component="span"/>
                <Field id="createuser" name="sexe" autoComplete="off"/>

                <label>Rue:  </label>
                <ErrorMessage name='street' component="span"/>
                <Field id="createuser" name="street" autoComplete="off"/>

                <label>Code postal:  </label>
                <ErrorMessage name='postal' component="span"/>
                <Field id="createuser" name="postal" autoComplete="off"/>

                <label>Newsletter:  </label>
                <ErrorMessage name='newsletter' component="span"/>
                <Field id="createuser" name="newsletter" autoComplete="off"/>

                <button type='submit'>S'inscrire</button>
            </Form>

        </Formik>
    </div>
  )
}

export default Singin