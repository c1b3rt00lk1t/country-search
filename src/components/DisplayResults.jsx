import React from 'react'

const DisplayResults = ({countries}) => {
  return (
    <>
      {countries.length >= 10 ? <p>Too many countries</p> : countries.map( country => <p>{country.name.official}</p>)}
    </>
  )
}

export default DisplayResults