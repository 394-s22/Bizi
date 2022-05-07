import { Stack, Button, Form } from "react-bootstrap";
import { useState } from 'react';
import { BusinessEntry } from '../types/BusinessTypes';

type SearchBarProps = {
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>,
    businessList: BusinessEntry[];
};

export const SearchBar = ({ searchText, setSearchText, businessList }: SearchBarProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const filteredBusinesses = Object.values(businessList).filter(business => console.log(business));
        console.log(filteredBusinesses);
        {/* <BusinessList businessList={businessData2} /> */ }
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Stack direction="horizontal" gap={3}>
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
