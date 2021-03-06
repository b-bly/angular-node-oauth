const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const PORT = 8080
const config = require('./config')
const session = require('express-session')
const passport = require('./passport');
const google = require('./routes/google')
const user = require('./routes/user');

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// sessions
app.use(
  session({
	secret: config.sessionSecret,
	resave: false, //required
	saveUninitialized: false //required
  })
)

// log sessions for dev only

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

// Passport auth

app.use(passport.initialize());
app.use(passport.session());

// routing
app.use('/api/auth/google', google);
app.use('/api/user', user);

app.get('/api/plus', (req, res, next)=> {
	console.log(req.headers)
	res.end();
});


// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
