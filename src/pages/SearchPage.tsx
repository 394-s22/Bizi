import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BasicFilter } from '../components/BasicFilter';
import { AdvancedSearch } from '../components/AdvancedSearch';
import { SearchBar } from '../components/SearchBar';
import { BusinessEntry } from '../types/BusinessTypes';

type SearchPageProps = {
  businessList: BusinessEntry[];
  setFilteredData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>;
};

export const SearchPage: React.FC<SearchPageProps> = ({
  businessList,
  setFilteredData,
}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [filterValues, setFilterValues] = useState<string[]>([] as string[]);
  const [advancedFilterValues, setAdvancedFilterValues] = useState<string[]>(
    [] as string[]
  );
  const [searchComponent, setSearchComponent] = useState<string>('basic');
  let navigate = useNavigate();

  const advancedFilteredBusinesses = Object.values(businessList).filter(
    (business) => {
      for (const value of advancedFilterValues) {
        if (
          business.hasOwnProperty('Initiatives') &&
          business.Initiatives.includes(value)
        ) {
          return true;
        }
      }
      return false;
    }
  );

  const filteredText = searchText.split(' ');

  const intersect = (keywords: Array<string>, tags: Array<string>) =>
    keywords.filter((keyword) => tags.some((tag) => tag.includes(keyword)));

  const finalFilteredBusinesses = Object.values(
    advancedFilteredBusinesses.length > 0
      ? advancedFilteredBusinesses
      : businessList
  ).filter(
    (business) =>
      intersect(
        filteredText.map((text) => text.toLowerCase()),
        business['Search Tags']
          .concat([business.Title, business.Description])
          .map((text) => text.toLowerCase())
      ).length > 0
  );

  return (
    <>
      <p
        className='my-4 mx-auto'
        style={{ width: '20rem', fontSize: 'large', textAlign: 'center' }}
      >
        Find small businesses near you that support your values
      </p>
      <SearchBar
        setSearchText={setSearchText}
      />
      <br />
      {searchComponent === 'basic' ? (
        <BasicFilter
          advancedFilterValues={advancedFilterValues}
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
            setFilteredData(finalFilteredBusinesses);
            navigate('/results');
          }}
        >
          Let's go!
        </Button>
      </div>
    </>
  );
};
