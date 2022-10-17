import axios from 'axios';
import {useState, useEffect} from 'react';
import DisplayResults from './components/DisplayResults';
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


  const handleClickShowTag = (name) => setCountrySearch(name);

  return (
    <>
      <Search country={countrySearch} setCountry={setCountrySearch}/>
      <DisplayResults handleClickShowTag={handleClickShowTag} countries={countryDB.filter(country => country.name.official.toLowerCase().includes(countrySearch.toLowerCase()))} />
    </>
  );
}

export default App;
