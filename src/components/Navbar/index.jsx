import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

const Navigation = () => {
    const { isLogged, setIsLogged } = useContext( DataContext );
    const handleClick = () => {
        setIsLogged(!isLogged);
    }

    return(
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
            <Container>
            <Navbar.Brand><Link to='/'>SUPERTEAM</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="#home">
                        <Link to='/'>
                                
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {isLogged && <Button onClick={handleClick}>Log Out</Button>}
            </Container>
        </Navbar>
    )
}

export default Navigation;