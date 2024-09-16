const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(express.urlencoded());

app.listen(port, () => {
  console.log(`GYMTICKET App listening on port ${port}`)
})

app.get('/', (req, res) => {
res.render("index")
})

app.get('/index', (req, res) => {
  res.render("index")
  })

app.get('/login', (req, res) => {
    res.render("login")
    })

app.get('/password-reset', (req, res) => {
    res.render("password-reset")
  })

app.get('/register', (req, res) => {
    res.render("register")
    })

