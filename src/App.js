import {useState, useEffect} from 'react';
import Search from "./components/Search";

function App() {
  const [countrySearch, setCountrySearch] = useState('');

  const getDataFromServer = () => {};

  useEffect(getDataFromServer,[]);

  return (
    <Search country={countrySearch} setCountry={setCountrySearch}/>
  );
}

export default App;
