import { Button, Form, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BusinessEntry } from '../types/BusinessTypes';

type SearchBarProps = {
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>,
    businessList: BusinessEntry[],
    setFilteredData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>;
};

export const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText, businessList, setFilteredData }) => {
    let navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const intersect = (keywords: Array<string>, tags: Array<string>) => (
            keywords.filter(keyword => tags.some(tag => tag.includes(keyword)))
        );

        const filteredText = searchText.split(' ');

        const filteredBusinesses = Object.values(businessList).filter(business =>
            intersect(filteredText.map(text =>
                text.toLowerCase()), business["Search Tags"].concat([business.Title, business.Description]).map(text =>
                    text.toLowerCase())).length > 0);
        setFilteredData(filteredBusinesses);
        navigate('/results');
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}
            onKeyDown={(e) => e.key === 'Enter' ? handleSubmit(e) : null}
        >
            <Stack style={{ width: '20rem', margin: "auto" }} direction="horizontal">
                < Form.Control
                    className="me-auto"
                    placeholder="Search Keywords"
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{backgroundColor: "lightgrey" }}
                />
                <Button type="submit">Search</Button>
            </Stack>
        </Form>
    );
};
