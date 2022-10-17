import React from 'react'

const SingleCountry = ({country}) => {
  return (
    <>
        <h2>{country.name.official}</h2>
        <p>{`capital ${country.capital[0]}`}</p>
        <p>{`area ${country.area}`}</p>
        <h4>languages:</h4>
        <ul>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={country.flags.svg} alt={"flag"} height={"100px"}/>
    </>
  )
}

export default SingleCountry