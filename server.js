const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static('./dist'))

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.listen(PORT, () => (console.log(`App listening on port ${PORT}`)))
