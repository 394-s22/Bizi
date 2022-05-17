import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Results } from './pages/Results';
import { SearchPage } from './pages/SearchPage';
import { BusinessEntry } from './types/BusinessTypes';
import { useData } from './utilities/firebase';
// @ts-ignore
import Geocode from 'react-geocode';

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
  const [searchComponent, setSearchComponent] = useState<string>("basic");

  useEffect(() => {
    const setLocations = async () => {
      if (loadingBusinesses || !businessData) return;
      Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY!);
      let updatedBusinesses : BusinessEntry[] = [];
      Object.values(businessData).forEach( entry => updatedBusinesses.push(Object.assign({}, entry)));

      await Promise.all(
        Object.entries(updatedBusinesses).map(async (business) => {
          console.log('geocoding: ' + business[1].Title);
          return new Promise((resolve, reject) =>
            Geocode.fromAddress(business[1].Address).then((response: any) => {
              business[1].GeoLocation = response.results[0].geometry.location;
              //console.log(business.GeoLocation);
              resolve(true);
            },
            (error: any) => {console.log(error); resolve(true);})
          );
        })
      );
      console.log(updatedBusinesses);
      setBusinessData(updatedBusinesses);
    };

    setLocations().then(() => console.log('businesses updated'));
  }, [loadingBusinesses]);

  // filtering businesses
  useEffect(() => {
    // app page selection
    if (loadingBusinesses || !businessData) return;
    const advancedFilteredBusinesses = Object.values(businessData).filter(
      (business) => {
        for (const value of advancedFilterValues) {
          if (business.Initiatives?.includes(value)) {
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
      advancedFilterValues.length > 0
        ? advancedFilteredBusinesses
        : businessData
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
  }, [searchText, advancedFilterValues, businessData]);

  //console.log(businessData);

  // returned page
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <SearchPage
              advancedFilterValues={advancedFilterValues}
              setAdvancedFilterValues={setAdvancedFilterValues}
              searchText={searchText}
              setSearchText={setSearchText}
              filterValues={filterValues}
              setFilterValues={setFilterValues}
              searchComponent={searchComponent}
              setSearchComponent={setSearchComponent}
            />
          }
        />
        <Route
          path='/results'
          element={
            <Results
              businessList={filteredData}
              searchText={searchText}
              setSearchText={setSearchText}
              filterValues={filterValues}
              advancedFilterValues={advancedFilterValues}
            />
          }
        />
        <Route path='/advanced-search' />
      </Routes>
      <NavBar setSearchComponent={setSearchComponent} />
    </Router>
  );
};

export default App;
