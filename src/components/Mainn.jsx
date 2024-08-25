import React from 'react'
export default function Mainn( props ) {
  const { data } = props
  return (
    <div className='imageContainer'>
      <img src={data.hdurl} alt={data.title || 'bg-img'} className='bgImage'/>
      <p>eqkcubqeougv</p>
    </div>
  )
} 
