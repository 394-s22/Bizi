import { useState } from 'react';
import { Button, Stack, Form } from 'react-bootstrap';

const SearchPage = () => {
    const [searchText, setSearchText] = useState('');
    const [diversityBool, setDiversityBool] = useState(false);
    const [communityBool, setCommunityBool] = useState(false);
    const [sustainabilityBool, setSustainabilityBool] = useState(false);
    const [ethicalBool, setEthicalBool] = useState(false);
    
    return(
        <>
            <p style={{textAlign: "center"}}>Find small businesses near you that support your values</p>
            <Form.Control
                className="me-auto"
                placeholder="Search Keywords"
                onChange={(e) => setSearchText(e.target.value)}
                style={{backgroundColor: "lightgrey"}}
            />
            <p>Select Your Values</p>
            <Form>
                <Form.Check
                    inline
                    label="Diversity"
                />
                <Form.Check
                    inline
                    label="Community"
                />
                <Form.Check
                    inline
                    label="Sustainability"
                />
                <Form.Check
                    inline
                    label="Ethical"
                />
            </Form>
        </>
    )
};

export default SearchPage;