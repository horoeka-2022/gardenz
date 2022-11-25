import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Photos from '../../../subcomponents/AdminGallery/Photos'
function Gallery() {
  return (
    <main className="container lg:flex-col m-28 justify-center items-center ">
      <section className="container lg:flex items-center text-2xl">
        <h2 className="font-bold">Edit Gallery</h2>
        <i className="text-orange ml-5 font-black">
          <AiOutlinePlusCircle />
        </i>
      </section>
      <section className="container lg:flex">
        <Photos />
      </section>
    </main>
  )
}

export default Gallery
