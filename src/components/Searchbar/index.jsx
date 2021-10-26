import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Searchbar = ({onSearch}) => {

    const [search, setSearch] = useState("");

    const inputHandler = (evt) => {
        setSearch(evt.target.value);
        if(evt.target.value.length === 0) {
            onSearch(null);
        }
    }

    const onClick = async (e) => {
        onSearch(search);
    }

    return (
        <div className="searchbar-container">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={inputHandler}
                />
                <Button variant="outline-success" onClick={onClick}>Buscar</Button>
            </Form>
        </div>

    )
}

export default Searchbar;