import axios from 'axios';
import {useState, useEffect} from 'react';
import Search from "./components/Search";

function App() {
  const [countrySearch, setCountrySearch] = useState('');
  const [countryDB, setCountryDB] = useState([]);

  const getDataFromServer = () => {
    axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => setCountryDB(response.data))
  };

  useEffect(getDataFromServer,[]);

  return (
    <Search country={countrySearch} setCountry={setCountrySearch}/>
  );
}

export default App;
