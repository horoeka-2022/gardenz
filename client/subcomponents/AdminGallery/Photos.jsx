import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import consume from '../../consume'

function Photos() {
  const { id } = useParams()
  const [photos, setPhotos] = useState([])
  console.log(id)

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await consume(`/gallery/${id}`, '', 'get', {})
      setPhotos(() => data.body)
    }
    fetchPhotos()
  }, [photos])

  return (
    <>
      {photos.map((photo) => {
        return (
          <div key={photo.name} className="m-2 h-1/7 w-1/7">
            <img
              className="object-cover h-auto"
              src={photo.url}
              alt={photo.name}
            ></img>
          </div>
        )
      })}
    </>
  )
}

export default Photos
