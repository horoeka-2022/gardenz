const express = require('express')
const db = require('../db/shop')
const log = require('../logger')
const router = express.Router()

module.exports = router

// /api/v1/shop

//GET /api/v1/shop/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const gardenId = id
    const products = await db.getProductsByGarden(gardenId)
    res.json(products)
  } catch (err) {
    log(err.message)
    res.status(500).json({
      error: {
        title: 'Unable to retrieve garden products',
      },
    })
  }
})
