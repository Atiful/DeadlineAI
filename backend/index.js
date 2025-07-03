require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const user = require("./Models/user");

const mongoDBurl = process.env.MONGODB_URL;
const sessionKey = process.env.SESSION_KEY;

const authRoutes = require("./Routes/Auth");
const googleAuth = require("./Routes/GoogleAuth");
const taskRouter = require("./Routes/task");
const calenderRouter = require("./Routes/calender");

app.use(
  session({
    secret: sessionKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 year

      // when deployed
      secure: true,
      httpOnly: false,
      sameSite : 'none',

      // secure : false ,
      // httpOnly : true,
      // sameSite : 'lax',
    },
    store: MongoStore.create({
      mongoUrl: mongoDBurl,
      collection: "sessions",
      ttl: 60 * 60 * 24 * 365 * 10,
    }),
  })
);
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173" , 
      "http://localhost:3000" , 
      "https://deadlineai-b.onrender.com" , 
      "https://deadlineai-f.onrender.com"],
    
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    user.authenticate()
  )
);


passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use("/auth", authRoutes);
app.use("/auth/google" , googleAuth);
app.use("/task", taskRouter);
app.use("/google/calender" , calenderRouter);

main()
  .then(() => {
    console.log("Database Connection is Sucessfully Build");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDBurl);
}

app.get("/", (req, res) => {
  res.send(req.session);
});

// global error handler

app.use((err, req, res, next) => {
  console.error("Error:", err.message || err);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});

app.listen(port, () => {
  console.log(`App is Started at ${port}`);
});
