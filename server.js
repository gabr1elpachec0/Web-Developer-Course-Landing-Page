const express = require('express')
const path = require('path')
const port = 3000
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req, res) {
  res.render('index')
})

app.listen(port, () => {
  console.log('Server running at port 3000...')
})
