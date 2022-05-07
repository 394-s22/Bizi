import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BusinessList } from './components/BusinessList';
import { SearchPage } from './pages/SearchPage';
//import businessData from './data/fakedata.json';
import { useData } from './utilities/firebase';
import { BusinessEntry } from './types/BusinessTypes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [businessData, setBusinessData, loadingBusinesses] = useData<BusinessEntry[]>("/");
  if (loadingBusinesses || !businessData) return <div><b>Loading...</b></div>;
  
  <Router>
    <Routes>
      <Route path = "/"/>
      <Route path = "/Search" element={<SearchPage businessList={businessData}/>}/>
    </Routes>
  </Router>
  
  // if (businessData2) {
  //   return (
  //     <>
  //       <SearchPage businessList={businessData2} />
  //     </>
  //   );
  // }
  // else {
  //   return <></>;
}


export default App;
