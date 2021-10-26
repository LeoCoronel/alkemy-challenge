import { Container, Row, Col, Button } from 'react-bootstrap';
import Hero from '../../components/Hero/index';

const Characters = ({character, search, setSearch}) => {

    const handleClick = () => {
        setSearch(!search);
    }

    return(
        <Container>
            <h2>Resultados:</h2>
            <Container>
            <Row>
                {character.map((ch, index) => {
                    return <Col key={`${ch.name}${index}`} >
                                <Hero 
                                    chName={ch.name} 
                                    img={ch.image.url} 
                                    pwrstats={ch.powerstats} 
                                    alignment={ch.biography.alignment} 
                                    height={ch.appearance.height[1]} 
                                    weight={ch.appearance.weight[1]} 
                                    id={ch.id} 
                                    eyeColor={ch.appearance["eye-color"]}
                                    hairColor={ch.appearance["hair-color"]}
                                    workPlace={ch.work.base}
                                    aliases={ch.biography.aliases}
                                />
                            </Col>
                })}
            </Row>
            </Container>
            <Button variant="dark" onClick={handleClick}>Volver</Button>
        </Container>
        
    )
}

export default Characters;