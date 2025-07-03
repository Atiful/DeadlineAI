const express = require("express");
const user = require("../Models/user");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
// const httpUrl = "http://localhost:3000";
const httpURL = 'https://deadlineai-b.onrender.com';
const httpUrlFrontend = "http://localhost:5173";
const router = express.Router();


// paspoet js
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${httpUrl}/auth/google/callback`,
        passReqToCallback: true,
      },
      async function (req, accessToken, refreshToken, profile, done) {
        try {
          const email = profile.emails[0].value;
          let existingUser = await user.findOne({ email });
           
      
          await user.deleteMany({ username: null });  // Clean-up if necessary

            const userToReturn = existingUser || await new user({ email }).save();
           userToReturn._accessToken = accessToken;
           userToReturn._refreshTokon = refreshToken;
        
          return done(null, userToReturn);
        } catch (err) {
          console.error('Error during Google authentication:', err);
          return done(err, null);
        }
      }
    )
  );
  
  // Google Auth Routes
  router.get(
    '/',
    passport.authenticate('google', 
      { scope: 
        ['email', 'profile' , 'https://www.googleapis.com/auth/calendar'] , 
      accessType: 'offline',   
       prompt: 'consent'
     })
  );
  
router.get('/callback', (req, res, next) => {
  // 👇 Call passport.authenticate manually to access user & token
  passport.authenticate('google', (err, user) => {
    if (err || !user) {
      return res.redirect(`${httpUrlFrontend}/login`);
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      req.session.accessToken = user._accessToken;
      req.session.refreshTokon = user._refreshTokon;

      return res.redirect(`${httpUrlFrontend}/dashboard`);
    });
  })(req, res, next);
});

  


  
  module.exports = router;