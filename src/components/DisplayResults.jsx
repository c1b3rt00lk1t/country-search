import React from 'react'

const DisplayResults = ({countries}) => {
  return (
    <>
      {countries.map( country => <p>{country.name.official}</p>)}
    </>
  )
}

export default DisplayResults