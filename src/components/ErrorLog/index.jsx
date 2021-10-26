import React, { useContext } from 'react';
import { Container, Alert} from 'react-bootstrap';
import { DataContext } from '../../context/DataContext';

const ErrorLog = () => {
    const { show, setShow } = useContext( DataContext );
    return (
        <Container>
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh, a ocurrido un error</Alert.Heading>
                    <p>
                    El email o la contraseña son incorrectos.
                    </p>
            </Alert>
        </Container>
    )
}

export default ErrorLog;