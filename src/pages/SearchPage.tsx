import { Form, Button } from 'react-bootstrap';
import { BasicFilter } from '../components/BasicFilter';
import { AdvancedSearch } from '../components/AdvancedSearch';
import { SearchBar } from '../components/SearchBar';
import { useState } from 'react';
import {BusinessEntry} from '../types/BusinessTypes';
import { BusinessList } from '../components/BusinessList';

type SearchPageProps = {
    businessList: BusinessEntry[];
};

export const SearchPage = (props: SearchPageProps) => {
    const [searchText, setSearchText] = useState('');
    const [filterValues, setFilterValues] = useState<string[]>([] as string[]);
    const [advancedFilterValues, setAdvancedFilterValues] = useState<string[]>([] as string[]);
    const [filteredList , setFilteredList ] = useState<BusinessEntry[]>();


    function displayBusinesses(businessList : any) {
        console.log(Object.values(businessList))
        const filteredBusinesses : any = Object.values(businessList).filter(
            (business : any) => {
                for(const value of advancedFilterValues) {
                    if(business.hasOwnProperty("Initiatives") && business.Initiatives.includes(value)) {
                        return true;
                    }
                }
                return false;
            }
        )
        setFilteredList(filteredBusinesses);
    }

    return (
        <>
            <p style={{ textAlign: "center" }}>Find small businesses near you that support your values</p>
            <SearchBar searchText={searchText} setSearchText={setSearchText} businessList={props.businessList} />
            <br></br>
            {/* <BasicFilter filterValues={filterValues} setFilterValues={setFilterValues}/> */}
            <AdvancedSearch filterValues={filterValues} setValues={setAdvancedFilterValues}/>
            <div className="text-center">
                <Button variant="secondary" size="lg" active onClick={() => displayBusinesses(props.businessList)}>
                    Let's go!
                </Button>
            </div>
            {filteredList && filteredList.length > 0 ? <BusinessList businessList={filteredList as BusinessEntry[]}></BusinessList> : <span></span>}
        </>
    );
};