require('dotenv').config()
const server = require('./server')

// https://stackoverflow.com/a/18024792
const port = process.env.PORT || 3001

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})
