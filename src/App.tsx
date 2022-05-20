import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Results } from "./pages/Results";
import { SearchPage } from "./pages/SearchPage";
import { BusinessEntry } from "./types/BusinessTypes";
import { useData } from "./utilities/firebase";
import { filterBusinesses } from "./utilities/filtering";
import { setLocations } from "./utilities/map";
// @ts-ignore
import Geocode from "react-geocode";

const App = () => {
  // state variables
  const [businessData, setBusinessData, loadingBusinesses] =
    useData<BusinessEntry[]>("/");
  const [filteredData, setFilteredData] = useState<BusinessEntry[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [advancedFilterValues, setAdvancedFilterValues] = useState<string[]>(
    [] as string[]
  );
  const [filterValues, setFilterValues] = useState<string[]>([] as string[]);
  const [searchComponent, setSearchComponent] = useState<string>("basic");
  
  // geocoding businesses (coordinates from addresses)
  useEffect(() => {
    setLocations(loadingBusinesses, businessData, setBusinessData).then(() => console.log("businesses updated"));
  }, [loadingBusinesses]);

  // filtering businesses
  useEffect(() => {
    filterBusinesses(loadingBusinesses, businessData, searchText, advancedFilterValues, setFilteredData);
  }, [searchText, advancedFilterValues, businessData]);

  // returned page
  return (
    <Router>
      <Routes>
        <Route
          path="/"
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
          path="/results"
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
        <Route path="/advanced-search" />
      </Routes>
      <NavBar setSearchComponent={setSearchComponent} />
    </Router>
  );
};

export default App;
