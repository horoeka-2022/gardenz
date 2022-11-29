import consume from '../../consume'

export async function getPhotos(id) {
  try {
    return await consume(`/gallery/${id}`, '', 'get', {})
  } catch (error) {
    console.error(error)
  }
}

export async function deleteAllPhotos(id, arrPhotos) {
  try {
    await consume(`/gallery/${id}/delete`, '', 'post', {
      photosId: arrPhotos,
    })
  } catch (error) {
    console.error(error)
  }
}
