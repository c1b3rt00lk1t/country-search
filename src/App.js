import {useState} from 'react';
import Search from "./components/Search";

function App() {
  const [countrySearch, setCountrySearch] = useState('');
  
  return (
    <Search country={countrySearch} setCountry={setCountrySearch}/>
  );
}

export default App;
