import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'
import { getGalleryImages } from './galleryHelper'
import { useDispatch } from 'react-redux'
import { showError } from '../../../../slices/waiting'

function Gallery() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const [images, setImages] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
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
        <img src="/images/comGardenPlant.png" alt="garden image1" />
        <img src="/images/comGardenRows.png" alt="garden image2" />
      </section>
    </>
  )
}

export default Gallery
