import axios from 'axios';

export const searchCharacter = (heroId) => {
    let url = `https://superheroapi.com/api.php/2958669337716524/search/${heroId}`;
    const promise = axios.get(url);
    const dataPromise = promise.then((response) => response.data.results);
    return dataPromise;
}