const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3333

let location = {
  latitude: 0,
  longitude: 0
}

app.post('/location', (req, res) => {
  location = req.body;

  console.log({ location })

  res.json({ status: 'Location received', location })
})

app.get('/location', (req, res) => {
  res.json({ location })
})

app.listen(port, () => {
  console.log(`Location app listening on port ${port}`)
})
