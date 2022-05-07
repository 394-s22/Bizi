import { Form } from 'react-bootstrap';
import { BasicFilter } from './BasicFilter';
import { AdvancedSearch } from './AdvancedSearch';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

type SearchPageProps = {
    businessList: any;
};
        
export const SearchPage = (props: SearchPageProps) => {
    const [searchText, setSearchText] = useState('');
    const [filterValues, setFilterValues] = useState<string[]>([] as string[]);

    return(
        <>
            <p style={{textAlign: "center"}}>Find small businesses near you that support your values</p>
            <SearchBar searchText={searchText} setSearchText={setSearchText} businessList={props.businessList} />
            <br></br>
            {/* <BasicFilter filterValues={filterValues} setFilterValues={setFilterValues}/> */}
            <AdvancedSearch filterValues={filterValues}/>
        </>
    );
};