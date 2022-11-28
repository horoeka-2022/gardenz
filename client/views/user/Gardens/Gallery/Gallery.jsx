import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'
import { getGalleryImages } from './galleryHelper'
import { useDispatch } from 'react-redux'
import { setWaiting, showError } from '../../../../slices/waiting'

function Gallery() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const [images, setImages] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setWaiting())
    getGalleryImages(id)
      .then((photos) => {
        setImages(photos)
        return null
      })
      .catch((error) => {
        dispatch(showError(error))
      })
  }, [])

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <section>
        <p> hi, this is the gallery</p>
        {images.map((image) => (
          <img key={image.url} src={image.url} alt={image.name} />
        ))}
      </section>
    </>
  )
}

export default Gallery
