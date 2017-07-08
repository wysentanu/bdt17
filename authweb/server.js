const express = require('express')
const app = express()
const exphbs  = require('express-handlebars')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')

//views middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//app.use(cookieParser)
//app.use(bodyParser)
app.use(session({
    secret: 'jirafu',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

// app.use(app.router);
// app.use(express.static(__dirname + '/public'));

//FB Strategy
passport.use(new FacebookStrategy({
    clientID: 750566105147286,
    clientSecret: '6ccdf517f6aaf9b7a249d921510ba045',
    callbackURL: "http://localhost:3003/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
))

// serialize and deserialize
passport.serializeUser(function(user, done) {
    done(null, user)
})
passport.deserializeUser(function(obj, done) {
    done(null, obj)
})

function isAuth(req, res, next) {
    if (req.isAuthenticated()) { 
        return next() 
    }
    res.redirect('/')
}

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'))

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/accounts',
                                      failureRedirect: '/' }))

app.get('/', function (req, res) {
    res.render('home')
})

//protected route
app.get('/accounts', isAuth, function(req, res){
    res.render('accounts', {name: req.user.displayName})
})

app.get('/logout', function(req, res){
  req.logout()
  res.redirect('/')
})

app.listen(3003)