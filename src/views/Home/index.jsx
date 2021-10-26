import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { searchCharacter } from '../../api';

import { Container } from 'react-bootstrap';

import Searchbar from '../../components/Searchbar/index';
import Main from '../../views/Main/index';
import Characters from '../../views/Characters/index';
import Team from '../../views/Team/index';
import NoTeam from '../../components/NoTeam/index';

import { DataContext } from '../../context/DataContext';

const Home = () => {
    const { team, setTeam } = useContext( DataContext );
    const [character, setCharacter] = useState([]);
    const [search, setSearch] = useState(false);

    const onSearch = async (character) => {
        if(!character) {
            return "no hay personaje";
        }
        const result = await searchCharacter(character);
        if(!result) {
            return;
        } else {
            setCharacter([result]);
            setSearch(true);
        }
    }


    return (
        <>
        <Searchbar onSearch={onSearch} />
            {search === false ? 
                <Container>
                    {team.length > 0 ? 
                    <>
                        <Main /> 
                        <Team team={team} setTeam={setTeam} /> 
                    </>
                    : 
                    <NoTeam />
                    }
                </Container>
                : 
                <Characters character={character[0]} search={search} setSearch={setSearch} setTeam={setTeam} team={team}/>
            }
            </>
    )
}

export default withRouter(Home);