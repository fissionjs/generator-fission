express = require 'express'
http = require 'http'
{join} = require 'path'

PORT = Number process.env.PORT or 9090

app = express()
app.use express.static join __dirname, 'public'

# Serve spa
app.get '/*', (req, res) ->
  idxFile = join __dirname, 'public/index.html'
  res.status 200
    .sendFile idxFile

httpServer = http.createServer app

httpServer.listen PORT, ->
  console.log 'info', "Server running on #{PORT}"
