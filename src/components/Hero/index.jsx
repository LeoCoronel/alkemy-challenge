import React, { useState, useEffect, useContext } from 'react';
import { Card, ListGroup, ListGroupItem, ProgressBar, Button } from 'react-bootstrap';
import { DataContext } from '../../context/DataContext';

const Hero = ({chName="undefined", img, pwrstats, alignment, height, weight, id, eyeColor, hairColor, workPlace, aliases}) => {
    const { good, setGood, bad, setBad, team, setTeam } = useContext( DataContext );
    const [warn, setWarn] = useState("");
    const [onTeam, setOnTeam] = useState(false);

    const checkAlignment = (alignment) => {
        if(alignment === "good") {
            return good < 3;
        } else if(alignment === "bad") {
            return bad < 3;
        }
    }

    const checkId = (id) => {
        for(let i = 0; i < team.length; i++) {
            if(team[i].id.id === id) {
                return true;
            } 
        }
        return false;
    }

    useEffect(() => {
        setOnTeam(checkId(id));
    }, []);

    const handleClick = () => {
        let character = {
            id: {id},
            name:{chName},
            img:{img},
            pwrstats:{pwrstats},
            alignment: {alignment},
            height: {height},
            weight: {weight},
            eyeColor: {eyeColor},
            hairColor: {hairColor},
            workPlace: {workPlace},
            aliases: {aliases}
        }

        if(checkAlignment(alignment)) {
            setTeam([...team, character]);
            if(alignment === "good") {
                setGood(good + 1);
            } else if(alignment === "bad") {
                setBad(bad + 1);
            }
        } else {
            setWarn("No se pueden añadir más personajes");
        }
    }

    const deleteCh = () => {
        if(alignment === "good") {
            setGood(good - 1);
        } else if(alignment === "bad") {
            setBad(bad - 1);
        }
        let filteredTeam = team.filter( ch => ch.id.id !== id );
        setTeam(filteredTeam);
    }

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{chName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Combate: <ProgressBar now={pwrstats.combat} label={`${pwrstats.combat}%`} />  </ListGroupItem>
            <ListGroupItem>Durabilidad: <ProgressBar now={pwrstats.durability} label={`${pwrstats.durability}%`} />  </ListGroupItem>
            <ListGroupItem>Inteligencia: <ProgressBar now={pwrstats.intelligence} label={`${pwrstats.intelligence}%`} />  </ListGroupItem>
            <ListGroupItem>Poder: <ProgressBar now={pwrstats.power} label={`${pwrstats.power}%`} />  </ListGroupItem>
            <ListGroupItem>Velocidad: <ProgressBar now={pwrstats.speed} label={`${pwrstats.speed}%`} />  </ListGroupItem>
            <ListGroupItem>Fuerza:<ProgressBar now={pwrstats.strength} label={`${pwrstats.strength}%`} />  </ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Text>{alignment}</Card.Text>
            {onTeam ? <Button variant="danger" onClick={deleteCh}>Eliminar</Button> : <Button variant="outline-success" onClick={handleClick}>Añadir</Button>}
            <Card.Text>{warn}</Card.Text>
        </Card.Body>
        </Card>
    )
}

export default Hero;