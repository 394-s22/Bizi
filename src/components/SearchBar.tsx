import { Stack, Button, Form } from "react-bootstrap";
import { useState } from 'react';
import { BusinessEntry } from '../types/BusinessTypes';
import { BusinessList } from '../components/BusinessList';

type SearchBarProps = {
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>,
    businessList: BusinessEntry[];
};

export const SearchBar = ({ searchText, setSearchText, businessList }: SearchBarProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const filteredText = searchText.split(' ');
        // const filteredBusinesses = Object.values(businessList).filter(business =>
        //     business["Search Tags"].map(tag =>
        //         tag.toLowerCase()).includes(searchText.toLowerCase()));
        /*
            "Ruby Nails".split(' ').map(text => obj["Search Tags"].includes(text.toLowerCase())).includes(true)
        */
        // const filteredBusinesses = [...searchText.split(' '), searchText].map(text => 
        //     Object.values(businessList).filter(business => 
        //         business["Search Tags"].includes(text.toLowerCase())));

        const filteredBusinesses = Object.values(businessList).filter(business =>
            business["Search Tags"].map(tag =>
                tag.toLowerCase()).includes(searchText.toLowerCase()));
        console.log(filteredBusinesses);
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}
            onKeyDown={(e) => e.key === 'Enter' ? handleSubmit(e) : null}
        >
            <Stack direction="horizontal">
                < Form.Control
                    className="me-auto"
                    placeholder="Search Keywords"
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ backgroundColor: "lightgrey" }}
                />
                <Button type="submit">Search</Button>
            </Stack>
        </Form>
    );
};
