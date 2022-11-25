import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Photos from '../../../subcomponents/AdminGallery/Photos'

function Gallery() {
  return (
    <main className="lg:flex-col m-28 justify-center items-center ">
      <section className="flex items-center text-2xl mb-8">
        <h2 className="font-bold ml-28">Edit Gallery</h2>
        <i className="text-orange ml-5 font-black">
          <AiOutlinePlusCircle />
        </i>
      </section>
      <section className="lg:flex flex-wrap justify-center">
        <Photos />
      </section>
    </main>
  )
}

export default Gallery
