import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BusinessList } from './components/BusinessList';
import { SearchPage } from './pages/SearchPage';
//import businessData from './data/fakedata.json';
import { useData } from './utilities/firebase';
import { BusinessEntry } from './types/BusinessTypes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [businessData, setBusinessData, loadingBusinesses] = useData<BusinessEntry[]>("/");
  if (loadingBusinesses || !businessData) return <div><b>Loading...</b></div>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage businessList={businessData} />} />
      </Routes>
    </Router>
  );
};


export default App;
