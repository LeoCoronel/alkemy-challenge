import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from '../../components/TeamCard/index';
import { DataContext } from '../../context/DataContext';

const Team = () => {

    const { team } = useContext( DataContext );

    return(
        <Container>
            <h2>Equipo:</h2>
            <Container>
            <Row>
                {team.map((ch, index) => {
                    console.log(ch.eyeColor)
                    return <Col key={`${ch.name.chName}${index}`}>
                        <TeamCard 
                            chName={ch.name.chName} 
                            img={ch.img.img} 
                            pwrstats={ch.pwrstats.pwrstats} 
                            alignment={ch.alignment.alignment} 
                            id={ch.id.id}
                            eyeColor={ch.eyeColor.eyeColor}
                            hairColor={ch.hairColor.hairColor}
                            workPlace={ch.workPlace.workPlace}
                            aliases={ch.aliases.aliases}
                            height={ch.height.height}
                            weight={ch.weight.weight}
                        />
                        </Col>
                })}
            </Row>
            </Container>
        </Container>
        
    )
}

export default Team;