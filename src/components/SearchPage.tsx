import { useState } from 'react';
import { Button, Stack, Form, ToggleButton, ToggleButtonGroup, ButtonGroup} from 'react-bootstrap';

export const SearchPage = () => {
    const [searchText, setSearchText] = useState('');
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
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
                <ToggleButtonGroup type="checkbox" className="mb-2">
                    <ToggleButton variant="outline-primary" value={1}  size="sm"
                    checked={checked} 
                    onChange={(e) => setChecked(e.currentTarget.checked)}>
                        <img src = "https://staybizi.com/static/media/diversity.d5c365f9.png"
                        width = "50"
                        height = "50"/>
                        <br></br>
                        Diversity
                    </ToggleButton>

                    <ToggleButton variant="outline-primary" value={1}  size="sm"
                    checked={checked1} 
                    onChange={(e) => setChecked1(e.currentTarget.checked)}
                    >
                    <img src = "https://staybizi.com/static/media/community_engagement.b2f4e847.png"
                        width = "50"
                        height = "50"/>
                        <br></br>
                        Community
                    </ToggleButton>
                    
                    <ToggleButton variant="outline-primary" value={1}  size="sm"
                    checked={checked2} 
                    onChange={(e) => setChecked2(e.currentTarget.checked)}>
                    <img src = "https://staybizi.com/static/media/sustainability.01853b09.png"
                        width = "50"
                        height = "50"/>
                        <br></br>
                        Sustainability
                    </ToggleButton>
                        
                    <ToggleButton variant="outline-primary" value={1}  size="sm"
                    checked={checked3} 
                    onChange={(e) => setChecked3(e.currentTarget.checked)}>
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