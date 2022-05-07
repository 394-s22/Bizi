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

        // [...searchText.split(' '), searchText] // [Ruby, Nails, Ruby Nails]

        // const isTag = () => { }

        const intersect = (keywords: Array<string>, tags: Array<string>) => (
            keywords.filter(keyword => tags.some(tag => tag.includes(keyword)))
        );
        const arr1 = ["Hello World!", "Javascript", "TypeScript", "ode"];
        const arr2 = ["Hello World!", "Python", "Business"];
        const arr3 = ["ello", "Python", "Business"];
        const arr4 = ["Python", "Business", "Code"];
        console.log(intersect(arr1, arr2));
        console.log(intersect(arr1, arr3));
        console.log(intersect(arr1, arr4));
        console.log(intersect(arr3, arr1));

        const filteredBusinesses = Object.values(businessList).filter(business =>
            (business["Search Tags"].concat([business.Title, business.Description])).map(tag =>
                tag.toLowerCase().includes(searchText.toLowerCase())).includes(true));
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
