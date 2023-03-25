import React from 'react'
import { useParams } from 'react-router-dom'


const Show = () => {
  let params = useParams();


  return (
    <div>
      <h1> {params.showId}</h1>
    </div>
  )
}

export default Show