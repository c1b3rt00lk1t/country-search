import React from 'react'
import ShowTag from './ShowTag'
import SingleCountry from './SingleCountry'

const DisplayResults = ({countries, handleClickShowTag}) => {
  return (
    <>
      {countries.length >= 10 ? 
          <p>Too many countries</p> : 
          (countries.length === 1 ? 
                <SingleCountry country={countries[0]}/>: 
                countries.map( country => <p>{country.name.official} <ShowTag name={country.name.official} handleClickShowTag={handleClickShowTag}/></p>))
          }
    </>
  )
}

export default DisplayResults