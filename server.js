global.Promise = require('bluebird')

const routes = require('./src/routes'),
 config = require('./config.json')

const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors')

  const app = express()
  app.use(bodyParser.json())
  
  app.use(cors())
  
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  routes(app)

  let port = process.env.port || 3000

  app.listen(port, () => console.log(`Listening on port ${port}...`))

  module.exports = app


