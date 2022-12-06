import React from 'react'

function GalleryItem(props) {
  const { name, url } = props.image
  return (
    <a href={url}>
      <img className="p-10" src={url} alt={name} />
    </a>
  )
}

export default GalleryItem
