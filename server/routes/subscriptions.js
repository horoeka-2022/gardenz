const express = require('express')
const db = require('../db/subscriptions')
const router = express.Router()
module.exports = router

router.post('/', (req, res) => {
  db.addSubscription(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  const gardenId = req.query.gardenId
  console.log(`getGardenData: `, gardenId);
  db.getSubscriptions(gardenId)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})