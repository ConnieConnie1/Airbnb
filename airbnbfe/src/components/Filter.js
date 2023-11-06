import React from 'react'

const Filter = ({icon, title}) => {
  return (
    <div className='filter'>
       <div className='filter__item--icon'>
        {icon}
      </div> 
      <br />
      <div className='filter__item--title'>
        {title}
      </div>
    </div>
  )
}

export default Filter