import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Results } from "./pages/Results";
import { SearchPage } from "./pages/SearchPage";
import { BusinessEntry } from "./types/BusinessTypes";
import { useData } from "./utilities/firebase";
import { setThumbnailImages } from "./utilities/images";

const App = () => {
  // state variables
  const [businessData, setBusinessData, loadingBusinesses] =
    useData<BusinessEntry[]>("/");
  const [filteredData, setFilteredData] = useState<BusinessEntry[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [advancedFilterValues, setAdvancedFilterValues] = useState<string[]>(
    [] as string[]
  );

  // generating thumbnails for each business
  useEffect(() => {
    setThumbnailImages(loadingBusinesses, businessData, setBusinessData).then(
      () => console.log("businesses thumbnail updated")
    );
  }, [loadingBusinesses]);

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
              loadingBusinesses={loadingBusinesses}
              businessData={businessData}
              setFilteredData={setFilteredData}
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
              advancedFilterValues={advancedFilterValues}
              setAdvancedFilterValues={setAdvancedFilterValues}
              loadingBusinesses={loadingBusinesses}
              businessData={businessData}
              setFilteredData={setFilteredData}
            />
          }
        />
        <Route path="/advanced-search" />
      </Routes>
      <NavBar />
    </Router>
  );
};

export default App;
