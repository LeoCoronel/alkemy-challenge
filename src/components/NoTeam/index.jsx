import {Container, Card} from 'react-bootstrap';

const NoTeam = () => {
    return(
        <Container>
            <Card>
            <Card.Header as="h5">Bienvenido</Card.Header>
            <Card.Body>
                <Card.Title>¡Arma tu equipo ideal!</Card.Title>
                <Card.Text>
                Todavia no has armado tu equipo. Recuerda que los equipos son formados por 3 heroes y 3 villanos.
                </Card.Text>
            </Card.Body>
            </Card>
        </Container>
    )
}

export default NoTeam;