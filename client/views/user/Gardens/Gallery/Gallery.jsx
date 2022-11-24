import React from 'react'
import { useParams } from 'react-router-dom'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss'
// import 'lightgallery/scss/lg-zoom.scss'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

function Gallery() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <section>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a href="/images/comGardenPlant.png">
            <img src="/images/comGardenPlant.png" alt="garden image1" />
          </a>
          <a href="/images/comGardenRows.png">
            <img src="/images/comGardenRows.png" alt="garden image2" />
          </a>
        </LightGallery>
      </section>
    </>
  )
}

export default Gallery
