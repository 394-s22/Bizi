import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BasicFilter } from '../components/BasicFilter';
import { AdvancedSearch } from '../components/AdvancedSearch';
import { SearchBar } from '../components/SearchBar';
import { BusinessEntry } from '../types/BusinessTypes';

type SearchPageProps = {
    businessList: BusinessEntry[],
    setFilteredData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>;
};

export const SearchPage: React.FC<SearchPageProps> = ({ businessList, setFilteredData }) => {
    const [searchText, setSearchText] = useState('');
    const [filterValues, setFilterValues] = useState<string[]>([] as string[]);
    const [advancedFilterValues, setAdvancedFilterValues] = useState<string[]>([] as string[]);
    const [searchComponent, setSearchComponent] = useState<string>('basic');
    let navigate = useNavigate();

    const filteredBusinesses = Object.values(businessList).filter(
        (business) => {
            for (const value of advancedFilterValues) {
                if (business.hasOwnProperty("Initiatives") && business.Initiatives.includes(value)) {
                    return true;
                }
            }
            return false;
        }
    );

    return (
        <>
            <p className="my-4 mx-auto" style={{ width: "20rem", fontSize: "large", textAlign: "center" }}>
                Find small businesses near you that support your values
            </p>
            <SearchBar searchText={searchText} setSearchText={setSearchText} businessList={businessList} setFilteredData={setFilteredData} />
            <br />
            {searchComponent === 'basic' ? 
                <BasicFilter filterValues={filterValues} setFilterValues={setFilterValues} searchComponent={searchComponent} setSearchComponent={setSearchComponent}/>
                :
                 <AdvancedSearch filterValues={filterValues} setValues={setAdvancedFilterValues} searchComponent={searchComponent} setSearchComponent={setSearchComponent} />
            }
            <div className="text-center mb-5">
                <Button className="mb-3" variant="secondary" size="lg" active onClick={() => { setFilteredData(filteredBusinesses); navigate('/results'); }}>
                    Let's go!
                </Button>
            </div>
        </>
    );
};