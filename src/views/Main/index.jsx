import React, { useContext, useEffect } from 'react';
import { ListGroup, ListGroupItem, ProgressBar, Card } from 'react-bootstrap';
import { DataContext } from '../../context/DataContext';
import IMAGES from './data';
import './styles.css';

const Main = () => {
    const { team } = useContext( DataContext );

    let stats = {
    intelligence: 0, 
    strength: 0, 
    speed: 0, 
    durability: 0, 
    power: 0, 
    combat: 0,
    }

    let desc = {
        height: 0,
        weight: 0
    }

    let max = "";

    const maxStat = (stats) => {
        max = Object.keys(stats).reduce((a, b) => stats[a] > stats[b] ? a : b);

        if(max === "power") {
            return IMAGES.power
        } else if (max === "intelligence") {
            return IMAGES.intelligence
        } else if (max === "strength") {
            return IMAGES.strength
        } else if (max === "speed") {
            return IMAGES.speed
        } else if (max === "durability") {
            return IMAGES.durability
        } else if (max === "combat") {
            return IMAGES.combat
        }
    }

    const calculatePowerStats = (team) => {
        team.map((ch) => {
            stats.intelligence += parseInt(ch.pwrstats.pwrstats.intelligence, 10);
            stats.strength += parseInt(ch.pwrstats.pwrstats.strength, 10);
            stats.speed += parseInt(ch.pwrstats.pwrstats.speed, 10);
            stats.durability += parseInt(ch.pwrstats.pwrstats.durability, 10);
            stats.power += parseInt(ch.pwrstats.pwrstats.power, 10);
            stats.combat += parseInt(ch.pwrstats.pwrstats.combat, 10);
            desc.height += parseInt(ch.height.height.replace(/[^0-9]/g, ""));
            desc.weight += parseInt(ch.weight.weight.replace(/[^0-9]/g, ""));
        })
        stats.intelligence = stats.intelligence / team.length;
        stats.strength = stats.strength / team.length;
        stats.speed = stats.speed / team.length;
        stats.durability = stats.durability / team.length;
        stats.power = stats.power / team.length;
        stats.combat = stats.combat / team.length;
        desc.height = desc.height / team.length;
        desc.weight = desc.weight / team.length;
    }

    calculatePowerStats(team);
    
    useEffect(() => {
        calculatePowerStats(team);
    }, [team]);

    return(
        <div>
            <div class="card">
                <div class="row no-gutters">
                    <div class="col-auto">
                        <img src={maxStat(stats)} class="img-fluid" alt="" />
                    </div>
                    <div class="col">
                        <div class="card-block px-2">
                            <Card.Body>
                                <Card.Title>TEAM STATS</Card.Title>
                                <Card.Text>
                                Este es el promedio de powerstats de tu equipo.
                                </Card.Text>
                                
                                <ListGroup className="list-group-flush">
                                <ListGroupItem>Combate: <ProgressBar now={stats.combat} label={`${stats.combat}%`} />  </ListGroupItem>
                                    <ListGroupItem>Durabilidad: <ProgressBar now={stats.durability} label={`${stats.durability}%`} />  </ListGroupItem>
                                    <ListGroupItem>Inteligencia: <ProgressBar now={stats.intelligence} label={`${stats.intelligence}%`} />  </ListGroupItem>
                                    <ListGroupItem>Poder: <ProgressBar now={stats.power} label={`${stats.power}%`} />  </ListGroupItem>
                                    <ListGroupItem>Velocidad: <ProgressBar now={stats.speed} label={`${stats.speed}%`} />  </ListGroupItem>
                                    <ListGroupItem>Fuerza:<ProgressBar now={stats.strength} label={`${stats.strength}%`} />  </ListGroupItem>
                                    <ListGroupItem variant="success">{max}</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </div>
                    </div>
                </div>
                <div class="card-footer w-100 text-muted">
                    <p>Peso: {desc.weight}</p>
                    <p>Altura: {desc.height}</p>
                </div>
            </div>
        </div>
    )
}

export default Main;