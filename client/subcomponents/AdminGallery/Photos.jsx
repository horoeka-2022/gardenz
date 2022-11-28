import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import consume from '../../consume'
import Photo from './Photo'

function Photos() {
  const { id } = useParams()
  const [photos, setPhotos] = useState([])
  const [photosToDelete, setPhotosToDelete] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getPhotos()
      setPhotos(() => data.body)
    }
    fetchPhotos()
  }, [])

  async function getPhotos() {
    return await consume(`/gallery/${id}`, '', 'get', {})
  }

  async function deleteAllPhotos(arrPhotos) {
    await consume(`/gallery/${id}/delete`, '', 'post', {
      photosId: arrPhotos,
    })
  }

  async function handleMultipleDelete() {
    const confirmAction = confirm('Please confirm deletion of selected photos')
    confirmAction ? await deleteAllPhotos(photosToDelete) : null
    const data = await getPhotos()
    setPhotosToDelete(() => [])
    setPhotos(() => data.body)
  }
  return (
    <>
      <div className="lg:flex flex-wrap">
        {photos.map((photo) => {
          return (
            <Photo
              photo={photo}
              key={photo.id}
              setPhotos={setPhotos}
              getPhotos={getPhotos}
              photosToDelete={photosToDelete}
              setPhotosToDelete={setPhotosToDelete}
            />
          )
        })}
      </div>

      <div className="items-center place-self-end">
        <button
          className="bg-orange px-6 py-2 rounded"
          onClick={handleMultipleDelete}
        >
          Delete Photos
        </button>
      </div>
    </>
  )
}

export default Photos
