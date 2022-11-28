const connection = require('./connection')

const getPhotos = (gardenId, db = connection) => {
  return db('gallery').where('garden_id', gardenId).select('name', 'url', 'id')
}

const addPhoto = (newImage, db = connection) => {
  const { name, url, garden_id } = newImage
  return db('gallery').insert({ name, url, garden_id })
}

const deletePhotos = (photoId, db = connection) => {
  return db('gallery').where('id', photoId ).del()
}

module.exports = {
  getPhotos,
  addPhoto,
  deletePhotos,
}
