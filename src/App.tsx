import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BusinessList } from './components/BusinessList';
import { SearchPage } from './components/SearchPage';
import businessData from './data/fakedata.json';
import { useData } from './utilities/firebase';
import { BusinessEntry } from './types/BusinessTypes';

function App() {
  const [businessData2, setBusinessData, loadingBusinesses] = useData<BusinessEntry[]>("/");
  console.log(businessData2);

  if (businessData2) {
    return (
      <>
        <SearchPage businessList={businessData2}/>
      </>
    );
  }
  else {
    return <></>;
  }
}


export default App;
