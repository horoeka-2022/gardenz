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

function Gallery() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)

  function LightGalleryItem(props) {
    return (
      <a href={props.src}>
        <img className="p-10" src={props.src} alt={props.alt} />
      </a>
    )
  }

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
        <LightGallery
          mode="lg-fade"
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="flex flex-wrap"
        >
          <LightGalleryItem
            src="/images/comGardenPlant.png"
            alt="garden image1"
          />
          <LightGalleryItem
            src="/images/comGardenRows.png"
            alt="garden image2"
          />
          <LightGalleryItem
            src="/images/comGardenRows.png"
            alt="garden image3"
          />
          <LightGalleryItem
            src="/images/comGardenRows.png"
            alt="garden image4"
          />
          <LightGalleryItem
            src="/images/comGardenRows.png"
            alt="garden image5"
          />
        </LightGallery>
    </>
  )
}

export default Gallery
