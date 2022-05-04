import { useState } from 'react';
import { Button, Stack, Form } from 'react-bootstrap';

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
            <p>Select Your Values</p>
            <Form>
                <Button>
                    <img src = "https://staybizi.com/static/media/diversity.d5c365f9.png"
                    width = "20"
                    height = "20"/>

                    Diversity
                </Button>
                <Button>
                <img src = "https://staybizi.com/static/media/community_engagement.b2f4e847.png"
                    width = "20"
                    height = "20"/>
                    
                    Community
                </Button>
                <Button>
                <img src = "https://staybizi.com/static/media/sustainability.01853b09.png"
                    width = "20"
                    height = "20"/>

                    Sustainability
                    </Button>
                    
                <Button>
                <img src = "https://staybizi.com/static/media/ethical.d185af13.png"
                    width = "20"
                    height = "20"/>

                    Ethical
                </Button>
            </Form>
        </>
    )
};

//export default SearchPage;