import { useState } from 'react';
import { Button, Stack, Form, ToggleButton, ToggleButtonGroup, ButtonGroup} from 'react-bootstrap';

export const SearchPage = () => {
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
            <br></br>
            <p>Select Your Values</p>
            <Form>
                <ToggleButtonGroup type="checkbox" defaultValue={[]} className="mb-2" onChange={(val) => console.log(val)}>

                    <ToggleButton id = "diversity-btn" variant="outline-primary" value={1}  size="sm">
                        <img src = "https://staybizi.com/static/media/diversity.d5c365f9.png"
                        width = "50"
                        height = "50"/>
                        <br></br>
                        Diversity
                    </ToggleButton>

                    <ToggleButton id = "community-btn" variant="outline-primary" value={2}  size="sm">
                    <img src = "https://staybizi.com/static/media/community_engagement.b2f4e847.png"
                        width = "50"
                        height = "50"/>
                        <br></br>
                        Community
                    </ToggleButton>
                    
                    <ToggleButton id = "sustainability-btn" variant="outline-primary" value={3}  size="sm">
                    <img src = "https://staybizi.com/static/media/sustainability.01853b09.png"
                        width = "50"
                        height = "50"/>
                        <br></br>
                        Sustainability
                    </ToggleButton>
                        
                    <ToggleButton id = "ethical-btn" variant="outline-primary" value={4}  size="sm">
                    <img src = "https://staybizi.com/static/media/ethical.d185af13.png"
                        width = "50"
                        height = "50"/>
                        <br></br>
                        Ethical
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form>
        </>
    )
};

export default SearchPage;