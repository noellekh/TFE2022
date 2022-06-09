import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import NavbarClassic from '../components/NavbarClassic';
import '../css/Singin.css';


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
    user_sex: Yup.string().required(),
    user_street: Yup.string().required(),
    postal: Yup.number().required(),
    newsletter: Yup.string().required()

});

const onSubmit = (data) =>{
  axios.post("http://localhost:3001/auth", data).then (()=>{
  console.log(data)
  });
};


  return (
    <div>
      <NavbarClassic />

      <div className='signin'>
        
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='form-signin'>
            <h2>M'inscrire</h2>
                <label>Nom:  </label>
                <ErrorMessage name='user_name' component="span"/>
                <Field id="createuser" name="user_name" autoComplete="off"/>

                <label>Prénom:  </label>
                <ErrorMessage name='user_surname' component="span"/>
                <Field id="createuser" name="user_surname" autoComplete="off"/>

                <label>Mot de passe:  </label>
                <ErrorMessage name='user_password' component="span"/>
                <Field id="createuser" name="user_password" type="password" autoComplete="off"/>

                <label>Date de naissance:  </label>
                <ErrorMessage name='user_birth' component="span"/>
                <Field id="createuser" name="user_birth" autoComplete="off"/>

                <label>Email:  </label>
                <ErrorMessage name='user_email' component="span"/>
                <Field id="createuser" name="user_email" autoComplete="off"/>

                <label>Numéro de téléphone:  </label>
                <ErrorMessage name='user_phone' component="span"/>
                <Field id="createuser" name="user_phone" autoComplete="off"/>

                <label>Sexe:  </label>
                <ErrorMessage name='user_sex' component="span"/>
                <Field id="createuser" name="user_sex" autoComplete="off"/>

                <label>Rue:  </label>
                <ErrorMessage name='user_street' component="span"/>
                <Field id="createuser" name="user_street" autoComplete="off"/>

                <label>Code postal:  </label>
                <ErrorMessage name='postal' component="span"/>
                <Field id="createuser" name="postal" autoComplete="off"/>

                <label>Newsletter:  </label>
                <ErrorMessage name='newsletter' component="span"/>
                <Field id="createuser" name="newsletter" autoComplete="off"/>

                <button type='submit' className='button-signin'>S'inscrire</button>
            </Form>

        </Formik>
      </div>
    </div>
  )
}

export default Singin