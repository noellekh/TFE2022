import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import NavbarClient from '../components/NavbarClient';

function Trainings() {
    const initialValues={
        score: ""
    };

    const onSubmit = (data) =>{
        // faire la db d'abord !
        //axios.post("http://localhost:3001/agendaclient", data).then ((response)=>{
        console.log('yes !')
       // });
    };

    const validationSchema = Yup.object().shape({
        score: Yup.string()
    })


  return (
    <div className='trainings'>
        <NavbarClient />
        
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <label>Entrez votre score: </label>
                <ErrorMessage name='score' component="span"/>
                <Field id="inputCreateScore" name="score"/>
                <button type='submit'>Ajouter score</button>
            </Form>

        </Formik>

    </div>
  )
}

export default Trainings