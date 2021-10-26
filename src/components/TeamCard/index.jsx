import { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import Stats from '../../components/Stats/index';
import { DataContext } from '../../context/DataContext';

const TeamCard = ({chName="undefined", img, id, alignment, eyeColor, hairColor, workPlace, aliases, height, weight}) => {
    const { good, setGood, bad, setBad, team, setTeam } = useContext( DataContext );
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore);
    }

    const deleteCharacter = () => {
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
        {showMore && <Stats eyeColor={eyeColor} hairColor={hairColor} aliases={aliases} workPlace={workPlace} height={height} weight={weight} /> }
        <Card.Body>
            <Button variant="outline-success" onClick={handleClick}>{showMore ? "Mostrar menos" : "Mostrar más"}</Button>
            <Button variant="outline-danger" onClick={deleteCharacter}>Eliminar</Button>
        </Card.Body>
        </Card>
    )
}

export default TeamCard;