import { Form, ToggleButton, ToggleButtonGroup, ButtonGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import valueData from '../data/values.json';

type AdvancedSearchProps = {
    filterValues : string[]
}

export const AdvancedSearch = (props : AdvancedSearchProps) => {

    const formatButtons = (values:any[]) => {
        return (
            <ToggleButtonGroup type="checkbox">
                {values.map(
                    (category) => {
                        return (
                            category.Values.map( (value : string) => <ToggleButton value={value}>{value}</ToggleButton>)
                        )
                    })
                }
            </ToggleButtonGroup>
        )        
    }

    return (
        <>
            <Button variant = "light">
                <FaAngleLeft /> 
                Back to Quick Filter
            </Button>
            <ul>{formatButtons(valueData)}</ul>
        </>
        
    );
}

export default AdvancedSearch;