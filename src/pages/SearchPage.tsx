import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdvancedSearch } from '../components/AdvancedSearch';
import { BasicFilter } from '../components/BasicFilter';
import { SearchBar } from '../components/SearchBar';
import { BusinessEntry } from '../types/BusinessTypes';

type SearchPageProps = {
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchPage: React.FC<SearchPageProps> = ({
  setSearchText,
  setAdvancedFilterValues,
}) => {
  const [filterValues, setFilterValues] = useState<string[]>([] as string[]);
  const [searchComponent, setSearchComponent] = useState<string>('basic');
  let navigate = useNavigate();

  return (
    <>
      <p
        className='my-4 mx-auto'
        style={{ width: '20rem', fontSize: 'large', textAlign: 'center' }}
      >
        Find small businesses near you that support your values
      </p>
      <SearchBar setSearchText={setSearchText} />
      <br />
      {searchComponent === 'basic' ? (
        <BasicFilter
          setAdvancedFilterValues={setAdvancedFilterValues}
          searchComponent={searchComponent}
          setSearchComponent={setSearchComponent}
        />
      ) : (
        <AdvancedSearch
          filterValues={filterValues}
          setValues={setAdvancedFilterValues}
          searchComponent={searchComponent}
          setSearchComponent={setSearchComponent}
        />
      )}
      <div className='text-center mb-5'>
        <Button
          className='mb-3'
          variant='secondary'
          size='lg'
          active
          onClick={() => {
            navigate('/results');
          }}
        >
          Let's go!
        </Button>
      </div>
    </>
  );
};
