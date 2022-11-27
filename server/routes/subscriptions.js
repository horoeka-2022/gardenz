const express = require('express')
const db = require('../db/subscriptions')
const router = express.Router()
module.exports = router

router.post('/', (req, res) => {
  const { gardenId, firstName, lastName, email } = req.body
  // validation check!
  db.addSubscription({ gardenId, firstName, lastName, email })
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
