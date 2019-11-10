// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginTest = require('./login_test')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  // setting handlebars helpers and define ifEquals function
  helpers: {
    ifEquals: function (arg1, arg2, options) { return (arg1 == arg2) ? options.fn(this) : options.inverse(this) }
  }
}))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const input = req.body
  const email = req.body.email
  const password = req.body.password
  const login = loginTest(input)

  if (login !== false) {
    res.render('show', { username: login })
  }
  else {
    res.render('index', { loginStatus: login, email, password })
  }

  app.get('/logout', (req, res) => {
    res.redirect('/')
  })

})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})