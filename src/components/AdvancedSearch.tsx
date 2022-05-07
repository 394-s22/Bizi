import { Form, ToggleButton, ToggleButtonGroup, ButtonGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import valueData from '../data/values.json';

type AdvancedSearchProps = {
    filterValues : string[]
}

export const AdvancedSearch = (props : AdvancedSearchProps) => {

    return (
        <Button variant = "light">
            <FaAngleLeft /> 
            Back to Quick Filter
        </Button>
        
    );
}

export default AdvancedSearch;