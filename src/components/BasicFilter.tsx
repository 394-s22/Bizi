import { Form, ToggleButton, ToggleButtonGroup, ButtonGroup} from 'react-bootstrap';
import { useState } from 'react';

type BasicFilterProps = {
    filterValues : string[], 
    setFilterValues: React.Dispatch<React.SetStateAction<string[]>>
}

export const BasicFilter = (props : BasicFilterProps) => {
    
    return (
        <>
            <p>Select Your Values</p>
            <ToggleButtonGroup type="checkbox" defaultValue={props.filterValues} className="mb-2" onChange={(val) => {props.setFilterValues(val); console.log(val)}}>

                <ToggleButton id = "diversity-btn" variant="outline-primary" value={'Diversity'}  size="sm">
                    <img src = "https://staybizi.com/static/media/diversity.d5c365f9.png"
                    width = "50"
                    height = "50"/>
                    <br></br>
                    Diversity
                </ToggleButton>

                <ToggleButton id = "community-btn" variant="outline-primary" value={'Community'}  size="sm">
                <img src = "https://staybizi.com/static/media/community_engagement.b2f4e847.png"
                    width = "50"
                    height = "50"/>
                    <br></br>
                    Community
                </ToggleButton>
                
                <ToggleButton id = "sustainability-btn" variant="outline-primary" value={'Sustainability'}  size="sm">
                <img src = "https://staybizi.com/static/media/sustainability.01853b09.png"
                    width = "50"
                    height = "50"/>
                    <br></br>
                    Sustainability
                </ToggleButton>
                    
                <ToggleButton id = "ethical-btn" variant="outline-primary" value={'Ethical'}  size="sm">
                <img src = "https://staybizi.com/static/media/ethical.d185af13.png"
                    width = "50"
                    height = "50"/>
                    <br></br>
                    Ethical
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

export default BasicFilter;