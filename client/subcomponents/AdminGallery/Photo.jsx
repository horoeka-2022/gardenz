import React from 'react'
import { useParams } from 'react-router-dom'
import { FiTrash2, FiSettings } from 'react-icons/fi'
import consume from '../../consume'

function Photo({
  photo,
  setPhotos,
  getPhotos,
  photosToDelete,
  setPhotosToDelete,
}) {
  const { id } = useParams()

  async function handleTrash() {
    const confirmAction = confirm('Please confirm deletion of the photo')
    confirmAction ? await deletePhoto(photo.id) : null
    const data = await getPhotos()
    setPhotos(() => data.body)
  }

  async function deletePhoto(photoId) {
    await consume(`/gallery/${id}/delete`, '', 'post', {
      photosId: [photoId],
    })
  }

  function checkMultiplePhotos(e) {
    const checked = photosToDelete.find((photoId) => photoId == photo.id)
    if (checked == null) {
      const photos = [...photosToDelete, photo.id]
      setPhotosToDelete(() => photos)
    } else {
      const photos = photosToDelete.filter((photoId) => photoId != photo.id)
      setPhotosToDelete(() => photos)
    }
  }

  return (
    <div className="m-2 relative" id={photo.id}>
      <img
        className="object-none h-48 w-48"
        src={photo.url}
        alt={photo.name}
      ></img>
      <FiTrash2
        data-testid="trash"
        className="absolute top-0 left-0 text-white text-2xl m-2"
        onClick={handleTrash}
      />
      <FiSettings
        data-testid="settings"
        className="absolute top-0 right-0  text-white text-2xl m-2"
      />
      <input
        type="checkbox"
        className="absolute bottom-0 right-0 m-2 h-6 w-6 accent-slate-100 rounded"
        onClick={checkMultiplePhotos}
      />
    </div>
  )
}

export default Photo
