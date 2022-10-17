import React from 'react'
import SingleCountry from './SingleCountry'

const DisplayResults = ({countries}) => {
  return (
    <>
      {countries.length >= 10 ? 
          <p>Too many countries</p> : 
          (countries.length === 1 ? 
                <SingleCountry country={countries[0]}/>: 
                countries.map( country => <p>{country.name.official}</p>))
          }
    </>
  )
}

export default DisplayResults