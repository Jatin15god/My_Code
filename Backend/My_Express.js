const express = require('express')
const app = express()
const port = 3000

console.log("Hello World");

app.get('/', (req, res) => {
  res.send('Hello World Crowd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})