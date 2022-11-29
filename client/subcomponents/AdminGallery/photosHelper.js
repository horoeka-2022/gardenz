import consume from '../../consume'

export async function getPhotos(id) {
  return await consume(`/gallery/${id}`, '', 'get', {})
}

export async function deleteAllPhotos(id, arrPhotos) {
  await consume(`/gallery/${id}/delete`, '', 'post', {
    photosId: arrPhotos,
  })
}
