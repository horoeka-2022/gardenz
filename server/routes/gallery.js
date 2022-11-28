const express = require('express')
const log = require('../logger')
const db = require('../db/gallery')

const router = express.Router()

// GET /api/v1/gallery/1
router.get('/:gardenid', (req, res) => {
  const galleryId = req.params.gardenid
  db.getPhotos(galleryId)
    .then((photos) => {
      res.json(photos)
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve gallery images',
        },
      })
    })
})

// POST /api/v1/gallery/1
router.post('/:gardenId', async (req, res) => {
  const image = {
    name: req.body.name,
    url: req.body.url,
    garden_id: req.params.gardenId,
  }
  try {
    await db.addPhoto(image)
    res.sendStatus(201)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to add gallery images',
      },
    })
  }
})

// POST /api/v1/gallery/1/delete
router.post('/:gardenId/delete', async (req, res) => {
  const { photosId } = req.body
  console.log(photosId)
  try {
    await Promise.all(photosId.map(async (id) => await db.deletePhotos(id)))
    res.sendStatus(200)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to delete gallery images',
      },
    })
  }
})

module.exports = router
