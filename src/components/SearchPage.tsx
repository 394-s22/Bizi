import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BasicFilter } from './BasicFilter';
import { AdvancedSearch } from './AdvancedSearch';

export const SearchPage = () => {
    const [searchText, setSearchText] = useState('');
    const [filterValues, setFilterValues] = useState<string[]>([] as string[]);

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
            {/* <BasicFilter filterValues={filterValues} setFilterValues={setFilterValues}/> */}
            <AdvancedSearch filterValues={filterValues}/>
        </>
    )
};

export default SearchPage;