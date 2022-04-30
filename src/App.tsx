import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BusinessList } from './components/BusinessList';
import businessData from './data/fakedata.json';

function App() {
  return (
    <BusinessList businessList={businessData}/>
  );
}


export default App;
