import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BusinessList } from './components/BusinessList';
import businessData from './data/fakedata.json';
import { useData } from './utilities/firebase';
import { SearchPage } from './components/SearchPage';

import { BusinessEntry } from './types/BusinessTypes';
 
function App() {
  const [businessData2, setBusinessData, loadingBusinesses] = useData("/")
  console.log(businessData2);

  return (
    // <BusinessList businessList={businessData}/>
    <SearchPage/>
  );
}


export default App;
