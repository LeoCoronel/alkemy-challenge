import {ListGroup, ListGroupItem } from 'react-bootstrap';

const Stats = ({eyeColor, hairColor, aliases, workPlace, height, weight}) => {
    return (
        <ListGroup className="list-group-flush">
            <ListGroupItem>Altura: {height}  </ListGroupItem>
            <ListGroupItem>Peso: {weight}  </ListGroupItem>
            <ListGroupItem>Ojos: {eyeColor}  </ListGroupItem>
            <ListGroupItem>Pelo: {hairColor}  </ListGroupItem>
            <ListGroupItem>Trabajo: {workPlace}  </ListGroupItem>
            <ListGroupItem>Aliases: {aliases.map((alias) => ` ${alias} |`)}  </ListGroupItem>
        </ListGroup>
    )
}

export default Stats;