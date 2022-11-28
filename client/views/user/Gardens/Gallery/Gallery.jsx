import React from 'react'
import { useParams } from 'react-router-dom'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// import GalleryItem from './GalleryItem'

function Gallery() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const images = [
    {
      id: id,
      name: 'garden image1',
      url: '/images/galleryPlaceHolder01.jpg',
    },
    {
      id: id,
      name: 'garden image2',
      url: '/images/galleryPlaceHolder02.jpg',
    },
    {
      id: id,
      name: 'garden image3',
      url: '/images/galleryPlaceHolder03.jpg',
    },
    {
      id: id,
      name: 'garden image4',
      url: '/images/galleryPlaceHolder04.jpg',
    },
    {
      id: id,
      name: 'garden image5',
      url: '/images/galleryPlaceHolder01.jpg',
    },
    {
      id: id,
      name: 'garden image6',
      url: '/images/galleryPlaceHolder02.jpg',
    },
    {
      id: id,
      name: 'garden image7',
      url: '/images/galleryPlaceHolder03.jpg',
    },
    {
      name: 'garden image8',
      url: '/images/galleryPlaceHolder04.jpg',
      id: id,
    },
  ]

  function GalleryItem(props) {
    const { name, url } = props.image
    return (
      <figure className="w-64 p-1.5 flex flex-row justify-around">
        <a href={url}>
          <img src={url} alt={name} />
        </a>
      </figure>
    )
  }

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <LightGallery
        mode="lg-fade"
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="flex flex-wrap py-20 px-10"
      >
        {images.map((imageObj) => {
          return <GalleryItem key={imageObj.name} image={imageObj} />
        })}
      </LightGallery>
    </>
  )
}

export default Gallery
