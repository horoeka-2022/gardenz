const express = require('express')
const { createBug } = require('./bugCreate')

const router = express.Router()
module.exports = router

router.post('/', async (req, res) => {
  const issue = {
    title: req.body.title,
    body: req.body.body,
  }
  try {
    await createBug(issue)
    res.sendStatus(201)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({
      error: {
        title: err.message,
      },
    })
  }
})
