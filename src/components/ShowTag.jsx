import React from 'react'

const ShowTag = ({name,handleClickShowTag}) => {

    const handleClick = () => handleClickShowTag(name);

  return (
    <span style={{border:"solid",borderRadius:"5px", borderWidth:"1px", fontSize:"12px", padding:"1px"}} onClick={handleClick}>show</span>
  )
}

export default ShowTag