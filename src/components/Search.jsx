import React from 'react'

const Search = ({country, setCountry}) => {

  const handleChange = (ev)=> setCountry(ev.target.value);

  return (
    <>
        <span>Find countries:</span><input onChange={handleChange} value={country}></input>
    </>
  )
}

export default Search