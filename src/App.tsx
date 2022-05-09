import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BusinessEntry } from './types/BusinessTypes';
import { useData } from './utilities/firebase';
import { useState } from 'react';
import { Results } from './pages/Results';
import { SearchPage } from './pages/SearchPage';
import { NavBar } from './components/NavBar';

const App = () => {
  const [businessData, setBusinessData, loadingBusinesses] =
    useData<BusinessEntry[]>('/');
  const [filteredData, setFilteredData] = useState<BusinessEntry[]>([]);
  if (loadingBusinesses || !businessData)
    return (
      <div>
        <b>Loading...</b>
      </div>
    );
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <SearchPage
              businessList={businessData}
              setFilteredData={setFilteredData}
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
