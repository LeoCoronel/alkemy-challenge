import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

let localTeam = JSON.parse(localStorage.getItem('team'));

if(localTeam === null || localTeam === "") {
    localTeam = [];
    localStorage.setItem("team", localTeam);
}

let localAlignment = JSON.parse(localStorage.getItem('alignment'));

if(localAlignment === null) {
    localAlignment = {
        good: 0,
        bad: 0
    };
    console.log(localAlignment);
    localStorage.setItem("alignment", JSON.stringify(localAlignment));
}

let localLogged = JSON.parse(localStorage.getItem('isLogged'));

if(localLogged === null || localLogged === "") {
    localLogged = false;
    localStorage.setItem("isLogged", localLogged);
}

export const DataProvider = ({children}) => {
    const [team, setTeam] = useState(localTeam);
    const [good, setGood] = useState(localAlignment.good);
    const [bad, setBad] = useState(localAlignment.bad);
    const [show, setShow] = useState(false);
    const [isLogged, setIsLogged] = useState(localLogged);
    let token;

    useEffect(() => {
        localStorage.setItem("team", JSON.stringify(team));
    }, [team])

    useEffect(() => {
        let alignment = {
            good: good,
            bad: bad
        }
        localStorage.setItem("alignment", JSON.stringify(alignment));
    }, [good, bad]);

    useEffect(() => {
        localStorage.setItem("isLogged", JSON.stringify(isLogged));
    }, [isLogged]);

    return (
        <DataContext.Provider value={{
            team,
            setTeam,
            good,
            setGood,
            bad,
            setBad,
            show,
            setShow,
            isLogged,
            setIsLogged,
            token
        }}>
            { children }
        </DataContext.Provider>
    )
}