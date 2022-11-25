import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Photos() {
  const { id } = useParams()
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    
  })

  return <h2> i am photo</h2>
}

export default Photos
