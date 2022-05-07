import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BasicFilter } from './BasicFilter';

export const SearchPage = () => {
    const [searchText, setSearchText] = useState('');


    return(
        <>
            <p style={{textAlign: "center"}}>Find small businesses near you that support your values</p>
            <Form.Control
                className="me-auto"
                placeholder="Search Keywords"
                onChange={(e) => setSearchText(e.target.value)}
                style={{backgroundColor: "lightgrey"}}
            />
            <br></br>
            <p>Select Your Values</p>
            <BasicFilter/>
        </>
    )
};

export default SearchPage;