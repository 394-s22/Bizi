import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BusinessEntry } from './types/BusinessTypes';
import { useData } from './utilities/firebase';
import { useState, useEffect } from 'react';
import { Results } from './pages/Results';
import { SearchPage } from './pages/SearchPage';
import { NavBar } from './components/NavBar';

const App = () => {
  // state variables
  const [businessData, setBusinessData, loadingBusinesses] =
    useData<BusinessEntry[]>('/');
  const [filteredData, setFilteredData] = useState<BusinessEntry[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [advancedFilterValues, setAdvancedFilterValues] = useState<string[]>(
    [] as string[]
  );
  const [filterValues, setFilterValues] = useState<string[]>([] as string[]);

  // filtering businesses
  useEffect(() => {
    // app page selection
    if (loadingBusinesses || !businessData) return;
    const advancedFilteredBusinesses = Object.values(businessData).filter(
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
      advancedFilterValues.length > 0 ? advancedFilteredBusinesses : businessData
    ).filter(
      (business) =>
        intersect(
          filteredText.map((text) => text.toLowerCase()),
          business['Search Tags']
            .concat([business.Title, business.Description])
            .map((text) => text.toLowerCase())
        ).length > 0
    );
    setFilteredData(finalFilteredBusinesses);
    // console.log('searchText:', searchText);
    // console.log('advancedFilterValues:', advancedFilterValues);
    // console.log(finalFilteredBusinesses);
  }, [searchText, advancedFilterValues]);
  
  // returned page
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <SearchPage
              setAdvancedFilterValues={setAdvancedFilterValues}
              searchText={searchText}
              setSearchText={setSearchText}
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />
          }
        />
        <Route
          path='/results'
          element={<Results businessList={filteredData} />}
        />
        <Route path='/advanced-search' />
      </Routes>
      <NavBar />
    </Router>
  );
};

export default App;
