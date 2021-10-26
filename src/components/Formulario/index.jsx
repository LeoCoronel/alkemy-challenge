import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { DataContext } from '../../context/DataContext';
import { useHistory } from 'react-router';
import ErrorLog from '../ErrorLog/index';

const Formulario = () => {
    const { isLogged, setIsLogged, show, setShow } = useContext( DataContext );
    const url = "http://challenge-react.alkemy.org/";
    const history = useHistory();
    return(
        <>
        <Formik 
            onSubmit={(valores, {resetForm} ) => {
                // Limpiar formulario
                resetForm();
                // Conectar a API y enviar los valores
                axios.post(url, {
                    email: valores.email,
                    password: valores.contra
                })
                    .then(function (response) {
                        console.log(response)
                        setIsLogged(!isLogged);
                        history.push("/home");
                        console.log(`SE LOGEA ${isLogged}`)
                    })
                    .catch(function (error) {
                        setShow(true);
                        console.log(`ERROR ${isLogged}`)
                    });
            }}
            initialValues={{
                email: "",
                contra: ""
            }}
            validate={ values => {
                let errors = {};
                // Validación email
                if(!values.email) {
                    errors.email = "Ingrese un email";
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                    errors.email = "Ingrese un email valido";
                }
                // Validación contraseña
                if(!values.contra) {
                    errors.contra = "Ingrese una contraseña";
                }
                return errors;
            }}
        >
            {( { errors } ) => (
                <Form className="container">
                {console.log(errors)}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="email@example.com" 
                            class="form-control"
                        />
                        <ErrorMessage name="email" component={() => (
                            <div className="error alert alert-danger">{errors.email}</div>
                        )} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contra">Contraseña</label>
                        <Field 
                            type="password" 
                            id="contra" 
                            name="contra" 
                            placeholder="password" 
                            class="form-control"
                        />
                        <ErrorMessage name="contra" component={() => (
                            <div className="error alert alert-danger">{errors.contra}</div>
                        )} />
                    </div>
                    <Button className="btn" variant="primary" type="submit">Ingresar</Button>
                </Form>
            )}
        </Formik>
        {show && <ErrorLog />}
        </>
    )
}

export default Formulario;